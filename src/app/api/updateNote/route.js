import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
export async function POST(req){
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