import { account } from ">api/appwrite/init";

export default async function Page() {
  const user = await account.createJWT();
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {user.jwt}
    </div>
  );
}
