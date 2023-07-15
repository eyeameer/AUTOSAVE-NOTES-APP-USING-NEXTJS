import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
export async function GET(req){
    await connectToDatabase()
    try {
        const notes=await Note.find()
   
        return new Response(JSON.stringify(notes),{status:200})
    } catch (error) {
        console.log(error)

    }
}