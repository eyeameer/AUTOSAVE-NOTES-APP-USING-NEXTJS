import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
import { getServerSession } from "next-auth"
import { authOptions } from "../auth/[...nextauth]/route"
export async function DELETE(req){
    const session=getServerSession(authOptions)
    if(!session){
        return new Response(JSON.stringify({message:'You are not Logged In!'}),{status:401})
    }
    await connectToDatabase()
    try {
        const body=await req.json()
        const {id, email} =body
        const note=await Note.findOneAndUpdate(
            { email },
            { $pull: { notesArray: { id: id } } },
            { new: true }
        )
        return new Response(JSON.stringify(note),{status:200})
    } catch (error) {
        console.log(error)
    }
}