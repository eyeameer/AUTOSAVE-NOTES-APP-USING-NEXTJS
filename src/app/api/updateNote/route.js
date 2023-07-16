import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
import { authOptions } from "../auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
export async function POST(req){
    const session=await getServerSession(authOptions)

    if(!session){
        return new Response(JSON.stringify({message:'You are not Logged In!'}),{status:401})
    }
    await connectToDatabase()
    try {
        const body=await req.json()
        const { email,id, noteContent } = body;
        const note=await Note.updateOne(
            { email, 'notesArray.id': id },
            { $set: { 'notesArray.$.noteContent': noteContent } },
            { new: true }
        )
        return new Response(JSON.stringify(note),{status:200})
    } catch (error) {
        
    }
}        