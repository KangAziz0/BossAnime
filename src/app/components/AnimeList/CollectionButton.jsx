"use client";
import { useState } from "react";

const CollectionButton = ({
  anime_mal_id,
  user_email,
  anime_image,
  anime_title,
}) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleCollection = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, anime_image, anime_title };
    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const collection = await response.json();
    // console.log(collection)
    if (collection.status == 200) {
      setIsCreated(true);
    }
  };
  return (
    <>
      {isCreated == true ? (
        <p>Berhasil Menambah Koleksi</p>
      ) : (
        <button
          onClick={handleCollection}
          className="py-1 px-4 bg-color-accent text-color-secondary text-xl font-bold"
        >
          Add Collection
        </button>
      )}
    </>
  );
};
export default CollectionButton;
