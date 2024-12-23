import { NextResponse, type NextRequest } from "next/server";
import { fbauth } from "§api/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export async function GET() {
    const [user, loading, error] = useAuthState(fbauth!);

    if (!loading && !user) {
        return NextResponse.json({ msg: "User not logged in", uid: "not found" }, { status: 401 });
    } else if (!loading && user) {
        return NextResponse.json({ msg: "User logged in", user: user, uid: user.uid }, { status: 200 });
    }
}