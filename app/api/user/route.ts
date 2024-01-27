import { connectToDB } from '@/utils/database'
import User from '@/models/user'

export const POST = async (req: Request) => {
    const { email, company, password } = await req.json();

    try {
        await connectToDB();

        const newUser = new User({
            email,
            company,
            password
        })

        await newUser.save();

        return new Response(JSON.stringify(newUser), {
            status: 201
        })

    } catch (error) {
        return new Response("Create email is failed!", {
            status: 500
        })
    }

}