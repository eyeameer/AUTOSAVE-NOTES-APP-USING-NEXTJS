import connectToDatabase from "../../../../lib/utils/connectDb/connectDb";
import Note from "../../../../lib/utils/model/model";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log('called')
  const { name, email } = await request.json();
  await connectToDatabase();
  const userExists = await Note.findOne({ email });

  if(!userExists){
  await Note.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
  }
 return NextResponse.json({ message: "User already registered" }, { status: 201 });
}