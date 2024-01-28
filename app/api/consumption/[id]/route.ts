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