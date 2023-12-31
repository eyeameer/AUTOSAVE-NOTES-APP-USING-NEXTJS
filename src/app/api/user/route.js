import connectToDatabase from "../../../../lib/utils/connectDb/connectDb";
import Note from "../../../../lib/utils/model/model";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getServerSession } from "next-auth"
export async function POST(request) {
  const session=await getServerSession(authOptions)

  if(!session){
      return new Response(JSON.stringify({message:'You are not Logged In!'}),{status:401})
  }
  const { name, email } = await request.json();
  await connectToDatabase();
  const userExists = await Note.findOne({ email });

  if(!userExists){
  await Note.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
  }
 return NextResponse.json({ message: "User already registered" }, { status: 201 });
} 