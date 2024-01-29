import { connectToDB } from "@/utils/database";
import Consumption from "@/models/consumption";

export const GET = async (req: Request, { params }: any) => {

    try {
        await connectToDB();

        const data = await Consumption.find({
            userID: params.id
        })

        return new Response(JSON.stringify(data), {
            status: 200
        })

    } catch (error) {
        return new Response("Get consumption data is failed.", {
            status: 500
        })
    }
}

export const DELETE = async (req: Request, { params }: any) => {
    try {
        await connectToDB();

        await Consumption.findByIdAndDelete(params.id)

        return new Response("Last Consumption Number Deleted Succesfully", {
            status: 200
        })

    } catch (error) {
        return new Response("Last Consumption Number is not Deleted!", {
            status: 500
        })
    }
}