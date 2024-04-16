import CollectionButton from "@/app/components/AnimeList/CollectionButton";
import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import { getAnimeResponse } from "@/libs/api-libs";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Image from "next/image";
const page = async ({ params: { id } }) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  const user = await authUserSession();
  const collection = await prisma.collection.findFirst({
    where: { user_email: user?.email, anime_mal_id: id },
  });
  console.log(anime);
  return (
    <>
      <div className="py-4 px-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
        <Image
          src={anime.data.images.webp.image_url}
          width={250}
          height={250}
          className="rounded w-full object-cover"
        />
        <div className="pl-4">
          {!collection && user && <CollectionButton anime_mal_id={id} user_email={user?.email} anime_image={anime.data.images.webp.image_url} anime_title={anime.data.title}/>}
          <div className="text-4xl text-color-accent font-bold pb-3">
            {anime.data.title} - {anime.data.year}
          </div>
          <div className="font-medium text-color-accent text-xl">
            Rangking : {anime.data.rank} | Rating :⭐ {anime.data.score}
          </div>
          <p className="">{anime.data.synopsis}</p>
        </div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};
export default page;
