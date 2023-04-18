import { useState, useEffect } from "react"
import Head from "next/head"
import { Inter } from "next/font/google"

import { useForm, SubmitHandler } from "react-hook-form"

import CardLogo from "../../public/img/creditcard/logo-visa.png"
import Contactless from "../../public/img/creditcard/contactless.png"
import Image from "next/image"
import { Back } from "@/components/Back"

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})

interface Inputs {
  number: string
  name: string
  validy: string
  cvv: string
}

export default function CreditCard() {
  const [number, setNumber] = useState("")
  const [name, setName] = useState("")
  const [vality, setVality] = useState("")
  const [cvv, setCvv] = useState("")

  return (
    <>
      <Head>
        <title>Credit Card</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Back />
      <main
        className={`${inter.variable} font-inter h-screen flex justify-center items-center leading-[130%] bg-[#1f2937]`}
      >
        <div
          id="app"
          className="w-full flex items-center justify-center flex-col gap-16 px-8"
        >
          <section
            id="creditcard"
            className="w-[28rem] h-[17rem] bg-transparent cursor-pointer group perspective"
          >
            <div className="relative preserve-3d group-hover:my-rotate-y-180 duration-1000">
              <div id="front" className="absolute backface-hidden">
                <div className="w-[28rem] h-[17rem] bg-gradient-to-b from-violet-500 to-blue-500 rounded-lg px-8 py-8 flex justify-between flex-col">
                  <div className="text-white flex items-center justify-between">
                    <Image
                      src={CardLogo}
                      alt="Logo visa"
                      className="w-16 h-9"
                    />
                    <Image
                      src={Contactless}
                      alt="Contactless"
                      className="w-6 h-7"
                    />
                  </div>

                  <div className="text-white flex items-center justify-center">
                    <span className="text-white/80 text-xl tracking-widest">
                      {number ? number : "**** **** **** ****"}
                    </span>
                  </div>

                  <div className="text-white flex items-center justify-between">
                    <span className="text-white/80 tracking-wide">
                      {name ? name : "John Doe"}
                    </span>
                    <span className="text-white/80 tracking-wide">
                      {vality ? vality : "mm / aa"}
                    </span>
                  </div>
                </div>
              </div>

              <div
                id="back"
                className="absolute my-rotate-y-180 backface-hidden overflow-hidden"
              >
                <div className="w-[28rem] h-[17rem] bg-gradient-to-b from-violet-500 to-blue-500 rounded-lg flex py-8 justify-between flex-col">
                  <div className="bg-zinc-900 h-16"></div>
                  <div className="mb-8 flex justify-center items-center gap-3 px-12">
                    <div className="bg-zinc-200 h-10 flex-1 rounded p-2 text-right">
                      <span className="text-zinc-500">{cvv ? cvv : "***"}</span>
                    </div>
                    <span className="text-white/80 tracking-wide">CVV</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-[28rem] h-[17rem]">
            <form action="" className="flex flex-col gap-4">
              <div className="input-wrapper">
                <label htmlFor="number" className="text-white">
                  Número do cartão
                </label>
                <input
                  id="number"
                  type="text"
                  max={19}
                  placeholder="**** **** **** ****"
                  className="w-full mt-1 px-2 py-3 border border-[#374151] bg-[#111827] rounded text-[#f3f4f6] focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-transparent"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="name" className="text-[#e5e7eb] ">
                  Nome do titular
                </label>
                <input
                  id="name"
                  type="text"
                  maxLength={30}
                  placeholder="Nome como está no cartão"
                  className="w-full mt-1 px-2 py-3 border border-[#374151] bg-[#111827] rounded text-[#f3f4f6] focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-transparent"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="flex gap-4">
                <div className="basis-[80%]">
                  <label htmlFor="validity" className="text-[#e5e7eb] ">
                    Validade
                  </label>
                  <input
                    id="validity"
                    type="text"
                    placeholder="mm/aa"
                    className="w-full mt-1 px-2 py-3 border border-[#374151] bg-[#111827] rounded text-[#f3f4f6] focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-transparent"
                    value={vality}
                    onChange={(e) => setVality(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="text-[#e5e7eb] ">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    maxLength={3}
                    placeholder="***"
                    className="w-full mt-1 px-2 py-3 border border-[#374151] bg-[#111827] rounded text-[#f3f4f6] focus:outline-none focus:ring-1 focus:ring-violet-500 focus:border-transparent"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </>
  )
}
