import { connectToDB } from "@/utils/database";
import Consumption from "@/models/consumption";
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from "next-auth";

export const GET = async (req: Request) => {
    const session = await getServerSession(authOptions)
    console.log(session)
    try {
        await connectToDB();

        const data = await Consumption.find({})

        return new Response(JSON.stringify(data), {
            status: 200
        })

    } catch (error) {
        return new Response("Get consumption data is failed.", {
            status: 500
        })
    }
}

export const POST = async (req: Request) => {
    const { date, consump } = await req.json();

    try {
        await connectToDB();

        const newConsumption = new Consumption({
            date,
            consump
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