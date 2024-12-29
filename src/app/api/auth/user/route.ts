import { fbauth } from ">api/firebase/firebase";

export async function GET() {
  const currentUser = fbauth?.currentUser;
  if (!currentUser) {
    return Response.json({ message: "Unauthorized" }, { status: 401 });
  }
  return Response.json(
    { message: "Found", user: currentUser },
    { status: 200 }
  );
}
