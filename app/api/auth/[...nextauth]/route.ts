import NextAuth from 'next-auth'
import User from '@/models/user'
import { connectToDB } from '@/utils/database'
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "ndhea" },
                password: { label: "Password", type: "password" },
            },

            async authorize(credentials) {
                await connectToDB();


                const userFound = await User.findOne({
                    email: credentials?.email,
                })

                if (!userFound) throw new Error("Wrong Email");


                if (credentials?.password === userFound.password) {
                    return userFound
                }
                if (credentials?.password != userFound.password) {
                    throw new Error("Wrong Password");
                }
            },
        }),
    ],

    pages: {
        signIn: "/sign-in"
    },

    callbacks: {
        async session({ session }: any) {
            const sessionUser = await User.findOne({ email: session.user.email })
            session.user.id = sessionUser._id.toString();
            session.user.company = sessionUser.company.toString();
            return session
        },
    }
})

export { handler as GET, handler as POST }