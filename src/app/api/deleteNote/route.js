import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
export async function DELETE(req){
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