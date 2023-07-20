import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-gradient-to-br from-[#6EB5E3] to-[#B88BCC] px-8">
      <div className="h-[720px] w-[1080px] rounded-lg bg-white p-4 shadow-xl">
        <div className="flex flex-col items-center justify-center gap-6 px-2">
          <h1 className="text-gradient flex bg-gradient-to-br from-[#6EB5E3] to-[#B88BCC] bg-clip-text text-[180px] font-bold text-transparent sm:text-[250px]">
            404
          </h1>
          <h2 className="-mt-6 text-center text-[40px] font-semibold text-zinc-600">
            OPS! PAGE NOT FOUND.
          </h2>

          <div className="w-[360px] px-2 text-center text-lg sm:w-[600px]">
            <p className="text-balance text-">
              Sorry, the page you&apos;re looking for doesn&apos;t exist. If you
              think something is broken, report a problem.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <button className="w-[170px] rounded-full border-2 border-[#6EB5E3] bg-[#6EB5E3] px-2 py-2 text-white">
              RETURN HOME
            </button>
            <button className="w-[170px] rounded-full border-2 border-[#6EB5E3] bg-white px-2 py-2 text-[#6EB5E3]">
              REPORT PROBLEM
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
