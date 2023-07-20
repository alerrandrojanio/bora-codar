import Image from "next/image";

import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

import { Card } from "@/components/kanban/Card";
import { Navbar } from "@/components/kanban/Navbar";
import { PageLink } from "@/components/PageLink";

export default function Kanban() {
  return (
    <main className={` bg-[#7C3AED]`}>
      <PageLink href="/" />

      <div id="app " className="grid h-screen grid-cols-[max-content_1fr]">
        <Navbar />
        <div id="main" className="pt-3">
          <div
            id="inner"
            className="h-full rounded-l-[32px] bg-[#fbfaff] px-[3.2rem] py-6"
          >
            <section
              id="title-avatar"
              className="flex flex-wrap-reverse items-center justify-between px-10 py-4"
            >
              <h1 className="flex items-center gap-5 text-4xl font-bold text-[#403937]">
                Meu Kanban
                <Image
                  src="/kanban/pencil.svg"
                  alt="Pencil"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </h1>
              <Image
                src={"https://github.com/alerrandrojanio.png"}
                className="rounded-full"
                width={60}
                height={60}
                alt="Avatar"
              />
            </section>

            <section id="filter" className="mt-6 flex gap-5 px-10">
              <button className="flex items-center gap-3 rounded-lg bg-[#7c3aed] px-10 py-3 text-white focus-within:outline-none hover:bg-[#9f67ff] focus:ring-2 focus:ring-[#9f67ff]">
                <AdjustmentsHorizontalIcon className="h-6 w-6" />
                <span className="text-base">Filtrar</span>
              </button>

              <div
                id="input-wrapper"
                className="group flex flex-1 items-center gap-4 rounded-lg border-[0.07rem] border-[#e3e3e3] bg-white px-10 shadow-sm focus-within:outline-none focus-within:ring-2 focus-within:ring-[#9f67ff]"
                tabIndex={0}
              >
                <MagnifyingGlassIcon className="h-6 w-6 text-[#505059]" />
                <input
                  type="text"
                  placeholder="Busque por card, assuntos ou responsáveis..."
                  className="w-full border-0 bg-transparent text-[#505059] outline-none placeholder:text-base placeholder:text-[#7c7c8a]"
                />
              </div>
            </section>

            <section className="flex flex-wrap gap-10 pt-4">
              <div id="todo" className="flex-1 p-2 ">
                <h2 className="px-8 py-2 text-2xl font-bold text-[#403937]">
                  A fazer
                </h2>

                <div id="cards" className="flex flex-col gap-8"></div>
              </div>

              <div id="doing" className="flex-1 p-2 ">
                <h2 className="px-8 py-2 text-2xl font-bold text-[#403937]">
                  Fazendo
                </h2>
              </div>

              <div id="done" className="flex-1 p-2 ">
                <h2 className="px-8 py-2 text-2xl font-bold text-[#403937]">
                  Feito
                </h2>

                <Card.Root>
                  <Card.Title title="#BoraCodar" />
                  <Card.Content content="Novo desafio do #boracodar" />
                  <Card.Tags tags={["desafio", "rocketseat"]} />
                </Card.Root>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
