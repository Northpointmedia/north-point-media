import { NextResponse } from "next/server";
export async function POST(request:Request){ const payload=await request.json(); console.log("Campaign inquiry",payload); return NextResponse.json({ok:true}); }
