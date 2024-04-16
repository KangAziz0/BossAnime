'use client'
import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col">
        <FileSearch size={44} className="text-color-accent"/>
        <h3 className="text-color-accent text-4xl font-bold">Not Found</h3>
        <Link href="/" className="text-color-primary hover:text-color-accent underline">Kembali</Link>
      </div>
    </div>
  );
};
export default Page;  
