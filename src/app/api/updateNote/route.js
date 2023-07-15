import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
export async function POST(req){
    await connectToDatabase()
    try {
        const { id, noteContent } = req.body;
        const note=await Note.updateOne({id:id},{$set:{noteContent}})
        return new Response(JSON.stringify(note),{status:200})
    } catch (error) {
        
    }
}