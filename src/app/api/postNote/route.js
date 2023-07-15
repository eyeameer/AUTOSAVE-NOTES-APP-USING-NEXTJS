import connectToDatabase from "../../../../lib/utils/connectDb/connectDb"
import Note from "../../../../lib/utils/model/model"
export async function POST(req){
    await connectToDatabase()
    try {
        const body=await req.json()
        const note=await Note.create({...body})
        return new Response(JSON.stringify(note),{status:200})

    } catch (error) {
        console.log(error)
        
    }
}