"use client";
import { MagnifyingGlass ,Star } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef();
  const router = useRouter();
  const handleSearch = (e) => {
    const keyword = searchRef.current.value;

    if (!keyword || keyword.trim() == "") return
    
    if (e.key === "Enter" || e.type === "click") {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative md:w-2/5 lg:w-1/2">
      <input
        className="w-full p-2 rounded"
        placeholder="Cari Anime..."
        ref={searchRef}
        onKeyDown={handleSearch}
      ></input>
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <MagnifyingGlass size={24} />
      </button>
    </div>
  );
};
export default InputSearch;
