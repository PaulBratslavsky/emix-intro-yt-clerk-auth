import { UserButton } from "@clerk/remix";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) return redirect("/sign-in");
  return {};
};

export default function DashboardRoute() {
  return (
    <div className="p-4">
      <div className="flex justify-between items-center gap-4">
        <h1>Dashboard Route - private </h1>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
