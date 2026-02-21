import Image from "next/image";

export default function Home() {
  return (<>
    <div className="flex flex-col items-center gap-4 justify-center py-26 text-white">
      <div className="flex items-center justify-center">
        <h1 className="text-6xl font-bold text-center">Welcome to <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-700  to-teal-700">GetMeAChai</span>!</h1>
        <Image src="/tea.gif" alt="tea" className="invert-30" width={70} height={80}></Image>
      </div>
      <p className="text-center text-xl">A crowd funding platform for creators. Get funded by your fans and followers. Start now!</p>
      <div className="flex gap-4 mt-4">
        <button className="cursor-pointer px-4 p-2 rounded-2xl bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-950 active:bg-linear-to-r active:from-purple-950 active:to-teal-900">Start Here</button>
        <button className="cursor-pointer px-4 p-2 rounded-2xl bg-linear-to-r from-purple-800 to-teal-800 hover:scale-105 transition-all hover:bg-linear-to-r hover:from-purple-950 hover:to-teal-950 active:bg-linear-to-r active:from-purple-950 active:to-teal-900">Read More</button>
      </div>
    </div>
    <div className="separation h-1 opacity-50 bg-slate-800"></div>
    <div className="flex flex-col items-center gap-4 justify-center py-20 text-white">
      <h2 className="text-3xl font-bold text-center">Your fans can buy you a Chai!</h2>
      <div className="flex justify-center items-center gap-20 my-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/man.gif" alt="man" className="bg-slate-500 rounded-full p-3" width={100} height={100}></Image>
          <h3 className="text-xl font-semibold">Fans want to help</h3>
          <p className="text-lg">Your fans are available to help you.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/coin.gif" alt="coin" className="bg-slate-500 rounded-full p-3" width={100} height={100}></Image>
          <h3 className="text-xl font-semibold">Fans want to help</h3>
          <p className="text-lg">Your fans are available to help you.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <Image src="/group.gif" alt="group" className="bg-slate-500 rounded-full p-3" width={100} height={100}></Image>
          <h3 className="text-xl font-semibold">Fans want to help</h3>
          <p className="text-lg">Your fans are available to help you.</p>
        </div>
      </div>
    </div>
    <div className="separation h-1 opacity-50 bg-slate-800 w-full"></div>
    <div className="flex flex-col items-center gap-4 justify-center py-20 text-white">
      <h2 className="text-3xl font-bold text-center">Learn more about us</h2>
      <div className="flex justify-center items-center gap-20 my-10">
        <div className="flex flex-col items-center justify-center gap-2">
          <img src="/mission.png" alt="mission" className="bg-slate-500 rounded-full p-3" width={100} height={100} />
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p className="text-lg w-[20vw] text-center">We want to help creators get funded by their fans.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src="/vision.png" alt="vision" className="bg-slate-500 rounded-full p-3" width={100} height={100} />
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p className="text-lg w-[20vw] text-center">To make it easy for fans to support their favorite creators.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img src="/values.png" alt="values" className="bg-slate-500 rounded-full p-3" width={100} height={100} />
          <h3 className="text-xl font-semibold">Our Values</h3>
          <p className="text-lg w-[20vw] text-center">We value creativity, innovation, and community.</p>
        </div>
      </div>
    </div>
  </>
  );
}
