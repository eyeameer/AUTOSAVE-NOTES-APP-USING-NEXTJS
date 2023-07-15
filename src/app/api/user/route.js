import connectToDatabase from "../../../../lib/utils/connectDb/connectDb";
import Note from "../../../../lib/utils/model/model";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, email } = await request.json();
  await connectToDatabase();
  await Note.create({ name, email });
  return NextResponse.json({ message: "User Registered" }, { status: 201 });
}