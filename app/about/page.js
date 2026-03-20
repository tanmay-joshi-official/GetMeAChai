import React from 'react'

const About = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[14px_24px] h-full w-full">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-purple-900/20 to-teal-900/20"></div>
                <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4">
                    <h1 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-6">
                        About GetMeAChai
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 text-center max-w-3xl">
                        A platform for creators to receive support from their community through secure donations.
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        Our Mission
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        GetMeAChai was created to help creators monetize their work by allowing supporters to make easy, secure payments with personalized messages.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="py-16 px-4 bg-slate-900">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            Features
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-slate-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">Secure Payments</h3>
                            <p className="text-slate-300">
                                Integrated with Razorpay for safe and secure transactions. All payments are processed through trusted payment gateways.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-teal-400">Personal Profiles</h3>
                            <p className="text-slate-300">
                                Create customized profile pages with your name, username, profile picture, and cover image to showcase your work.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-purple-400">Supporter Messages</h3>
                            <p className="text-slate-300">
                                Supporters can send personalized messages along with their donations to connect with creators.
                            </p>
                        </div>

                        <div className="bg-slate-800 rounded-lg p-6 shadow-xl hover:shadow-2xl transition-shadow">
                            <h3 className="text-xl font-semibold mb-3 text-teal-400">Dashboard</h3>
                            <p className="text-slate-300">
                                Update your profile details including name, username, email, and profile images.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How It Works Section */}
            <div className="py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-4 bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                            How It Works
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center">
                            <div className="bg-linear-to-r from-purple-800 to-teal-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Create Profile</h3>
                            <p className="text-slate-300">
                                Sign up and set up your profile with personal information and payment details.
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-linear-to-r from-purple-800 to-teal-800 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Receive Support</h3>
                            <p className="text-slate-300">
                                Supporters can visit your page to make payments and send messages of support.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="py-16 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 bg-linear-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
                        Get Started Today
                    </h2>
                    <p className="text-lg text-slate-300 mb-8">
                        Join creators who are already receiving support through GetMeAChai.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/login" className="px-8 py-3 bg-linear-to-r from-purple-800 to-teal-800 rounded-full font-semibold hover:scale-105 transition-all hover:from-purple-900 hover:to-teal-900">
                            Create Your Profile
                        </a>
                        <a href="/" className="px-8 py-3 border border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all">
                            Home
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About