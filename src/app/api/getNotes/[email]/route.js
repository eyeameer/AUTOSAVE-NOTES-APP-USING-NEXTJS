import connectToDatabase from "../../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../../lib/utils/model/model"
export async function GET(req,{params}){
    const email=params.email
    console.log(email)
    await connectToDatabase()
    try {
        const notes=await Note.findOne({email})
  
        return new Response(JSON.stringify(notes),{status:200})
    } catch (error) {
        console.log(error)

    }
}