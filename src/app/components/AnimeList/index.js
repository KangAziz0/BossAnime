import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ api }) => {
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 md: gap-3 mx-3">
      {api.data?.map((anime,i) => {
        return (
          <Link href={`/anime/${anime.mal_id}`} key={i} className="cursor-pointer text-color-primary hover:text-color-accent transition-all ">
            <Image src={anime.images.webp.image_url} alt="..." width={200} height={300} className="max-h-60 rounded-xl" />
            <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
          </Link>
        );
      })}
    </div>
  );
};
export default AnimeList;
