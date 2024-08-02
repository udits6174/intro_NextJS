import { NextRequest, NextResponse } from "next/server";
import signup from "@/actions/signup";

export async function POST(req: NextRequest) {
    const body = await req.json();
    //SERVER ACTION
    signup(body.email, body.password);
    return NextResponse.json({ message: "Signed up" });
}
// export async function POST(req: NextRequest){
//     //body
//     const body = await req.json();
//     //headers
//     const header = req.headers;
//     //query params
//     const query = req.nextUrl.searchParams;
//     console.log({query, header, body});
//     return NextResponse.json(
//         body
//     )
// }