import React from 'react'

const Username = async ({ params }) => {
    const { username } = await params
    return (<>
        <div className="cover relative">
            <img className='w-full h-64 object-cover' src="https://i.pinimg.com/originals/b4/99/50/b4995090b30f9dec8aefa98003aca288.gif" alt="cover" />
            <div className="profile absolute -bottom-12 left-[46.6%] w-24 h-24 rounded-full overflow-hidden border-2 border-white">
                <img className='w-full h-full object-cover' src="https://tr.rbxcdn.com/180DAY-2da16bf954be24dc43b0c69353412d96/420/420/Hat/Webp/noFilter" alt="profile" />
            </div>
        </div>
        <div className="info flex flex-col items-center mt-16 gap-2">
            <h2>@{username}</h2>
            <div className='text-slate-400'>Creating animated arts for VTT's</div>
            <div className='text-slate-400'>9,719 members • 82 posts • $15,450/release</div>
        </div>
        <div className="content flex justify-center gap-20 my-10">
            <div className="supporters w-[40%] bg-slate-900 rounded-md shadow-2xl p-10">
                <h2 className='text-2xl font-bold text-center'>Supporters</h2>
                <div className="supporters-list flex flex-col items-center justify-center gap-4 mt-5">
                    <div className='bg-gray-800 hover:bg-gray-700 active:bg-gray-800 cursor-pointer transition-all p-2 rounded-lg px-6 flex items-center gap-4'>
                        <img src="https://tr.rbxcdn.com/180DAY-2da16bf954be24dc43b0c69353412d96/420/420/Hat/Webp/noFilter" alt="profile" className="profile h-10 rounded-full border border-white" />
                        <div>Tanmay donated <span className='font-bold'>$10</span> with a message "Great work, keep it up!"</div>
                    </div>
                    <div className='bg-gray-800 hover:bg-gray-700 active:bg-gray-800 cursor-pointer transition-all p-2 rounded-lg px-6 flex items-center gap-4'>
                        <img src="https://tr.rbxcdn.com/180DAY-2da16bf954be24dc43b0c69353412d96/420/420/Hat/Webp/noFilter" alt="profile" className="profile h-10 rounded-full border border-white" />
                        <div>Tanmay donated <span className='font-bold'>$10</span> with a message "Great work, keep it up!"</div>
                    </div>
                    <div className='bg-gray-800 hover:bg-gray-700 active:bg-gray-800 cursor-pointer transition-all p-2 rounded-lg px-6 flex items-center gap-4'>
                        <img src="https://tr.rbxcdn.com/180DAY-2da16bf954be24dc43b0c69353412d96/420/420/Hat/Webp/noFilter" alt="profile" className="profile h-10 rounded-full border border-white" />
                        <div>Tanmay donated <span className='font-bold'>$10</span> with a message "Great work, keep it up!"</div>
                    </div>
                    <div className='bg-gray-800 hover:bg-gray-700 active:bg-gray-800 cursor-pointer transition-all p-2 rounded-lg px-6 flex items-center gap-4'>
                        <img src="https://tr.rbxcdn.com/180DAY-2da16bf954be24dc43b0c69353412d96/420/420/Hat/Webp/noFilter" alt="profile" className="profile h-10 rounded-full border border-white" />
                        <div>Tanmay donated <span className='font-bold'>$10</span> with a message "Great work, keep it up!"</div>
                    </div>
                </div>
            </div>
            <div className="payment w-[40%] bg-slate-900 rounded-md shadow-2xl p-10 h-[68vh]">
                <h2 className='text-2xl font-bold text-center'>Make a Payment</h2>
                <div className="payment-list flex flex-col items-center justify-center gap-4 mt-5">
                    <input type="text" placeholder='Enter Name' className='px-4 py-2 rounded-full bg-gray-800 text-white focus:outline outline-slate-500 w-full' />
                    <input type="text" placeholder='Enter Message' className='px-4 py-2 rounded-full bg-gray-800 text-white focus:outline outline-slate-500 w-full' />
                    <input type="text" placeholder='Enter Amount' className='px-4 py-2 rounded-full bg-gray-800 text-white focus:outline outline-slate-500 w-full' />
                    <button className='px-4 py-2 w-1/4 cursor-pointer rounded-full bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-900 active:bg-linear-to-r active:from-purple-950 active:to-teal-950'>Pay</button>
                    <div className="predefined-amounts flex gap-4 mt-3">
                        <button className='px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 cursor-pointer'>Pay $10</button>
                        <button className='px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 cursor-pointer'>Pay $20</button>
                        <button className='px-4 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-800 cursor-pointer'>Pay $30</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Username