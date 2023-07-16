import connectToDatabase from "../../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../../lib/utils/model/model"
import { authOptions } from "../../auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
export async function GET(req,{params}){
    const session=await getServerSession(authOptions)

    if(!session){
        return new Response(JSON.stringify({message:'You are not Logged In!'}),{status:401})
    }
    const email=params.email


    await connectToDatabase()
    try {
        const notes=await Note.findOne({email})
  
        return new Response(JSON.stringify(notes),{status:200})
    } catch (error) {
        console.log(error)

    }
}