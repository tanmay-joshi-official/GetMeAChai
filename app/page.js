import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (<>
    <div className="flex flex-col items-center gap-4 justify-center py-26 text-white">
      <div className="flex items-center justify-center">
        <h1 className="md:text-6xl text-4xl w-full text-nowrap items-center font-bold text-center md:gap-4 gap-0 flex md:flex-row flex-col">Welcome to
          <span className="flex items-center">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-700  to-teal-700">GetMeAChai</span>
            <span> !</span>
            <Image src="/tea.gif" alt="tea" className="invert-30" width={70} height={80}></Image>
          </span>
        </h1>
      </div>
      <p className="text-center md:text-xl text-md w-[80vw]">A crowd funding platform for creators. Get funded by your fans and followers. Start now!</p>
      <div className="flex gap-4 mt-4">
        <Link href='/login'>
          <button className="cursor-pointer px-4 p-2 rounded-2xl bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-950 active:bg-linear-to-r active:from-purple-950 active:scale-100 active:to-teal-900">Start Here</button>
        </Link>
        <Link href='/about'>
          <button className="cursor-pointer px-4 p-2 rounded-2xl bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-950 active:bg-linear-to-r active:from-purple-950 active:to-teal-900  active:scale-100">Read More</button>
        </Link>
      </div>
    </div>
    <div className="separation h-1 opacity-50 bg-slate-800"></div>
    <div className="flex flex-col items-center gap-4 justify-center py-20 text-white">
      <h2 className="text-3xl text-purple-300 font-bold text-center w-[80vw]">Your fans can buy you a <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-500  to-teal-500">Chai!</span></h2>
      <div className="flex md:flex-row flex-col justify-center items-center gap-20 my-10">
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-2xl px-8 py-10 md:w-auto w-[80vw] hover:shadow-md hover:shadow-green-600 ease-in duration-300 cursor-pointer">
          <Image src="/man.gif" alt="man" className="bg-slate-500 rounded-full p-3" width={100} height={100}></Image>
          <h3 className="text-xl text-green-400 font-semibold text-center mt-2">Fans want to help</h3>
          <p className="text-lg md:w-[20vw] w-11/12 text-center">Your fans are available to help you.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-2xl px-8 py-10 md:w-auto w-[80vw] hover:shadow-md hover:shadow-yellow-600 ease-in duration-300 cursor-pointer">
          <Image src="/coin.gif" alt="coin" className="bg-slate-500 rounded-full p-3" width={100} height={100}></Image>
          <h3 className="text-xl text-yellow-400 font-semibold text-center mt-2">Support Your Favorite Creators</h3>
          <p className="text-lg md:w-[20vw] w-11/12 text-center">Help your favorite creators achieve their goals.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-2xl px-8 py-10 md:w-auto w-[80vw] hover:shadow-md hover:shadow-blue-600 ease-in duration-300 cursor-pointer">
          <Image src="/group.gif" alt="group" className="bg-slate-500 rounded-full p-3" width={100} height={100}></Image>
          <h3 className="text-xl text-blue-400 font-semibold text-center mt-2">Build a Community</h3>
          <p className="text-lg md:w-[20vw] w-11/12 text-center">Connect with your fans and build a loyal community.</p>
        </div>
      </div>
    </div>
    <div className="separation h-1 opacity-50 bg-slate-800 w-full"></div>
    <div className="flex flex-col items-center gap-4 justify-center py-20 text-white">
      <h2 className="text-3xl text-purple-300 font-bold text-center">Learn more about us</h2>
      <div className="flex md:flex-row flex-col justify-center items-center gap-20 my-10">
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-2xl px-2 py-10 md:w-auto w-[80vw] hover:shadow-md hover:shadow-blue-600 ease-in duration-300 cursor-pointer">
          <img src="/mission.gif" alt="mission" className="bg-slate-500 rounded-full p-3" width={100} height={100} />
          <h3 className="text-xl text-blue-400 font-semibold">Our Mission</h3>
          <p className="text-lg md:w-[20vw] w-11/12 text-center">We want to help creators get funded by their fans.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-2xl px-2 py-10 md:w-auto w-[80vw] hover:shadow-md hover:shadow-orange-600 ease-in duration-300 cursor-pointer">
          <img src="/vision.gif" alt="vision" className="bg-slate-500 rounded-full p-3" width={100} height={100} />
          <h3 className="text-xl text-orange-400 font-semibold">Our Vision</h3>
          <p className="text-lg md:w-[20vw] w-11/12 text-center">To make it easy for fans to support their favorite creators.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 bg-slate-900 rounded-2xl px-2 py-10 md:w-auto w-[80vw] hover:shadow-md hover:shadow-pink-600 ease-in duration-300 cursor-pointer">
          <img src="/values.gif" alt="values" className="bg-slate-500 rounded-full p-3" width={100} height={100} />
          <h3 className="text-xl text-pink-400 font-semibold">Our Values</h3>
          <p className="text-lg md:w-[20vw] w-11/12 text-center">We value creativity, innovation, and community.</p>
        </div>
      </div>
    </div>
  </>
  );
}
