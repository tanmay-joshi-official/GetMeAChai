import Image from "next/image";

export default function Home() {
  return (<>
    <div className="flex flex-col items-center gap-4 justify-center h-[40vh] text-white">
      <h1 className="text-4xl font-bold text-center">Welcome to GetMeAChai!</h1>
      <p className="text-center text-lg text-gray-300">A crowdfunding platform for creators. Get funded by your fans and followers. Start now!</p>
      <div className="flex gap-4 mt-4">
        <button className="cursor-pointer p-1 rounded-lg bg-linear-to-r from-purple-950 to-pink-950 px-2 py-1 hover:scale-105 transition-transform">Start Here</button>
        <button className="cursor-pointer p-1 rounded-lg bg-linear-to-r from-purple-950 to-pink-950 px-2 py-1 hover:scale-105 transition-transform">Read More</button>
      </div>
    </div>
  </>
  );
}
