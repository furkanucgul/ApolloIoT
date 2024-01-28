import { connectToDB } from "@/utils/database";
import Consumption from "@/models/consumption";

export const POST = async (req: Request) => {
    const { date, consump, userID } = await req.json();

    try {
        await connectToDB();

        const newConsumption = new Consumption({
            date,
            consump,
            userID
        })

        await newConsumption.save();

        return new Response(JSON.stringify(newConsumption), {
            status: 201
        })

    } catch (error) {
        return new Response("Save Consumption Number is Failed!", {
            status: 500
        })
    }

}