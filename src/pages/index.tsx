import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { Titillium_Web } from "next/font/google"

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Menu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${titillium.variable} font-sans`}>
        <div className="w-screen h-screen flex justify-center">
          <div className="w-96 max-w-full flex items-center justify-center flex-col space-y-8 py-8 p-4">
            <Link
              href="/loginpage"
              className="w-full bg-violet-600 py-6 px-14 rounded-full flex justify-center text-white font-semibold text-xl hover:bg-violet-700"
            >
              Login page
            </Link>

            <Link
              href="/time"
              className="w-full bg-violet-600 py-6 px-14 rounded-full flex justify-center text-white font-semibold text-xl hover:bg-violet-700"
            >
              Time
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
