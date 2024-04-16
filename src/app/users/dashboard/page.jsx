import Header from "@/app/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";
import Image from "next/image";
const Page = async () => {
  const user = await authUserSession();
  return (
    <div className="text-color-primary">
      <Header title={"My Dashboard"} />
      <div className="flex flex-col justify-center items-center gap-3">
        <h3 className="fotn-bold text-xl">{user.name}</h3>
        <Image
          src={user.image}
          alt="..."
          width={200}
          height={200}
          className="max-h-52 w-44"
        />
      </div>
      <div className="flex justify-center gap-2 py-2 font-bold text-xl">
        <Link href={"/users/dashboard/collection"} className="py-2 px-6 bg-color-accent text-color-secondary">My Collection</Link>
        <Link href={"/users/dashboard/comment"} className="py-2 px-6 bg-color-accent text-color-secondary">My Comment</Link>
      </div>
    </div>
  );
};
export default Page;
