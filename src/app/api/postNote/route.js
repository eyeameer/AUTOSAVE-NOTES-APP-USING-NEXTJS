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
        const note=await Note.findOneAndUpdate({email:body.email},{$push:{
            notesArray:{
                id:body.id,
                noteContent:body.noteContent
            }
        }})
        return new Response(JSON.stringify(note),{status:200})

    } catch (error) {
        console.log(error)
        
    }
}