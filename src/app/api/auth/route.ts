import { NextResponse, type NextRequest } from "next/server";
import { fbauth } from "§api/firebase/firebase";
import { verifyAccess } from "@vercel/flags";
import { useAuthState } from "react-firebase-hooks/auth";
import { User } from "firebase/auth";

export async function GET(request: NextRequest) {
    const [user, loading, error] = useAuthState(fbauth);
    
    if (user) {
        return NextResponse.json({ status: 200, user: user });
    } else {
        return NextResponse.json({ status: 401, error: "Unauthorized" });
    }
}