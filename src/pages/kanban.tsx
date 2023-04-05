import Head from "next/head"
import Image from "next/image"
import { ReactNode, useState } from "react"
import clsx from "clsx"

import {
  ClipboardIcon,
  UsersIcon,
  DocumentTextIcon,
  CogIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid"

import { Inter } from "next/font/google"
import { Back } from "@/components/Back"

import Logo from "../../public/img/kanban/logo.svg"
import Pencil from "../../public/img/kanban/pencil.svg"
import { CardKanban } from "@/components/CardKanban"

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})

interface Menu {
  icon: ReactNode
  legend: any
}

const menu: Array<Menu> = [
  {
    icon: <ClipboardIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Boards</span>,
  },
  {
    icon: <UsersIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Equipes</span>,
  },
  {
    icon: <DocumentTextIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Relatórios</span>,
  },
  {
    icon: <CogIcon className="h-8 w-8" />,
    legend: <span className="max-md:hidden">Ajustes</span>,
  },
]

export default function Kanban() {
  return (
    <>
      <Head>
        <title>Kanban</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${inter.variable} font-inter bg-[#7C3AED]`}>
        <Back />

        <div id="app " className="grid grid-cols-[max-content_1fr] h-screen">
          <nav className="pt-12 pb-0 px-12 min-w-[11.5rem] max-md:min-w-[8rem]">
            <Image src={Logo} alt="Logo" />

            <ul className="mt-24 grid gap-14 ">
              {menu.map((item, index) => {
                return (
                  <li key={index}>
                    <a
                      href="#"
                      className={clsx(
                        "flex items-center gap-6 text-[#cab3ff] font-medium rounded hover:text-white [&.active]:text-white focus:outline-none focus:ring-2 focus:ring-[#9f67ff]",
                        {
                          active: index === 0,
                        },
                      )}
                    >
                      {item.icon}
                      {item.legend}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
          <div id="main" className="pt-3">
            <div
              id="inner"
              className="h-full bg-[#fbfaff] rounded-l-[32px] py-6 px-[3.2rem]"
            >
              <section
                id="title-avatar"
                className="flex justify-between items-center flex-wrap-reverse py-4 px-10"
              >
                <h1 className="flex items-center gap-5 text-4xl font-bold text-[#403937]">
                  Meu Kanban
                  <Image src={Pencil} alt="Pencil" className="cursor-pointer" />
                </h1>
                <Image
                  src={"https://github.com/alerrandrojanio.png"}
                  className="rounded-full"
                  width={60}
                  height={60}
                  alt="Avatar"
                />
              </section>

              <section id="filter" className="mt-6 px-10 flex gap-5">
                <button className="flex items-center gap-3 py-3 px-10 bg-[#7c3aed] text-white rounded-lg focus-within:outline-none hover:bg-[#9f67ff] focus:ring-2 focus:ring-[#9f67ff]">
                  <AdjustmentsHorizontalIcon className="h-6 w-6" />
                  <span className="text-base">Filtrar</span>
                </button>

                <div
                  id="input-wrapper"
                  className="flex flex-1 items-center gap-4 px-10 bg-white border-[0.07rem] border-[#e3e3e3] rounded-lg shadow-sm group focus-within:outline-none focus-within:ring-2 focus-within:ring-[#9f67ff]"
                  tabIndex={0}
                >
                  <MagnifyingGlassIcon className="h-6 w-6 text-[#505059]" />
                  <input
                    type="text"
                    placeholder="Busque por card, assuntos ou responsáveis..."
                    className="border-0 w-full outline-none placeholder:text-[#7c7c8a] placeholder:text-base"
                  />
                </div>
              </section>

              <section className="flex gap-10 pt-4 flex-wrap">
                <div id="todo" className="flex-1 p-2 ">
                  <h2 className="px-8 py-2 text-2xl font-bold text-[#403937]">
                    A fazer
                  </h2>

                  <div id="cards" className="flex flex-col gap-8">
                    <CardKanban
                      title="#BoraCodar"
                      text="Novo desafio do #boracodar"
                      tags={["desafio", "rocketseat"]}
                    />
                    <CardKanban
                      title="#BoraCodar"
                      text="Novo desafio do #boracodar"
                      tags={["desafio", "rocketseat"]}
                    />
                  </div>
                </div>
                <div id="doing" className="flex-1 p-2 ">
                  <h2 className="px-8 py-2 text-2xl font-bold text-[#403937]">
                    Fazendo
                  </h2>
                  <CardKanban
                    title="#BoraCodar"
                    text="Novo desafio do #boracodar"
                    tags={["rocketseat"]}
                  />
                </div>
                <div id="done" className="flex-1 p-2 ">
                  <h2 className="px-8 py-2 text-2xl font-bold text-[#403937]">
                    Feito
                  </h2>
                  <CardKanban
                    title="#BoraCodar"
                    text="Novo desafio do #boracodar"
                    tags={["desafio", "rocketseat"]}
                  />
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
