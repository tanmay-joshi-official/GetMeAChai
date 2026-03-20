import PaymentPage from '../components/PaymentPage'
import { notFound } from 'next/navigation'
import connectDB from '../db/connectDb'
import User from '../models/User'

const Username = async ({ params }) => {
    const { username } = await params

    // If the username is not present, show a 404 page
    const checkUser = async () => {
        await connectDB()
        let u = await User.findOne({username : username})
        if (!u) {
            return notFound()
        }
    }
    await checkUser()
    return <PaymentPage username={username} />

}

export default Username