import Header from "@/app/components/Dashboard/Header";
import Link from "next/link";
import Image from "next/image";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
const page = async () => {
  const user = authUserSession();
  const collection = await prisma.collection.findMany({
    where: { user_email: user.email },
  });
  return (
    <div className="text-color-primary">
      <Header title={"My Collection"} />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-4 mt-2 gap-2">
        {collection.map((collect,index) => {
          return (
            <Link href={`/anime/${collect.anime_mal_id}`} className="relative border" key={index}>
              <Image
                src={collect.anime_image}
                alt={"..."}
                width={250}
                height={250}
                className="w-full"
              />
              <h3 className="absolute bottom-0 py-1 flex w-full justify-center text-xl font-bold bg-color-accent text-color-secondary">
                {collect.anime_title}
              </h3>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default page;
