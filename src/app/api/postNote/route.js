import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
export async function POST(req){
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