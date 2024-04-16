import Link from "next/link";
import { authUserSession } from "@/libs/auth-libs";
const UserActionButton = async () => {
  const user = await authUserSession();
  const actionLabel = user ? "SIGN OUT" : "SIGN IN";
  const actionLink = user ? "/api/auth/signout" : "/api/auth/signin";
  // console.log("user = ", user);
  return (
    <div className="cursor-pointer flex justify-between gap-3 transition-all">
      {user ? <Link href="/users/dashboard" className="font-bold py-2">DASHBOARD</Link> : null}
      <Link href={actionLink} className="py-2 px-8 inline-block bg-color-secondary text-color-accent font-bold rounded-md hover:bg-color-primary hover:text-color-secondary ">{actionLabel}</Link>
    </div>
  );
};
export default UserActionButton;
