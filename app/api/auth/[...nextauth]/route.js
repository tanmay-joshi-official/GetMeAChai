import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github"
import mongoose from "mongoose"
import connectDB from "@/app/db/connectDb"
import User from "@/app/models/User"
import Payment from "@/app/models/Payment"

const handler = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],  
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {
            if (account.provider === "github") {
                await connectDB()
                // Check if the user already exists in the database
                const currentUser = await User.findOne({ email: user.email })
                if (!currentUser) {
                    // Create a new user if they don't exist
                    const newUser = await User.create({
                        email: user.email,
                        username: user.email.split("@")[0]
                    })
                }
                return true
            }
        },
        async session({ session, token, user }) {
            await connectDB()
            const dbUser = await User.findOne({ email: session.user.email })
            console.log(dbUser)
            session.user.name = dbUser.username
            return session
        }
    }
})

export { handler as GET, handler as POST }