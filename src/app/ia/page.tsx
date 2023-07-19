import { AiOutlinePlusCircle } from "react-icons/ai";
import { LuWand2 } from "react-icons/lu";
import { HiOutlinePhotograph } from "react-icons/hi";
import { HiMiniCodeBracket, HiOutlineMusicalNote } from "react-icons/hi2";
import { BsPlayCircle } from "react-icons/bs";

import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { Card } from "@/components/ia/Card";
import { Back } from "@/components/Back";

const cards = [
  {
    id: 1,
    Icon: HiMiniCodeBracket,
    text: "Gerador de códigos",
    hasAction: true,
  },
  {
    id: 2,
    Icon: HiOutlinePhotograph,
    text: "Edição de foto",
    hasAction: true,
  },
  {
    id: 3,
    Icon: BsPlayCircle,
    text: "Geração de vídeos",
    hasAction: true,
  },
  {
    id: 4,
    Icon: HiOutlineMusicalNote,
    text: "Criado de áudios e músicas",
    hasAction: false,
  },
];

export default function Page() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#56CBB0] via-[#3A7DB5] to-[#284FB7] p-8 text-zinc-50">
      <Back />
      <div className="flex h-[720px] w-[1080px] flex-col items-center justify-center  rounded-3xl bg-[#16243A]/95 px-8">
        <header className="flex w-full flex-col items-center justify-center gap-4">
          <div className="rounded-lg bg-[#0F172A]/90 p-3 text-zinc-300">
            <LuWand2 className="h-6 w-6" />
          </div>
          <h1 className="text-xl font-semibold">
            Experimente o poder da inteligência artificial
          </h1>
        </header>

        <div className="m-10 flex flex-col gap-2">
          {cards.map((card) => {
            return (
              <Card.Root key={card.id}>
                <Card.Icon Icon={card.Icon} />
                <Card.Content text={card.text} />
                <Card.Actions hasAction={card.hasAction} />
              </Card.Root>
            );
          })}
        </div>

        <hr className="h-[1px] w-full border-none bg-zinc-500" />

        <div className="mt-10 flex w-full items-center justify-center gap-2 rounded-lg border-[1px] border-zinc-500 bg-[#0F172A]/80 px-2 py-3 text-zinc-300">
          <AiOutlinePlusCircle className="h-6 w-6" />
          <input
            type="text"
            placeholder='Envie uma mensagem ou digite  "/" para exibir os comandos'
            className="w-full bg-transparent px-2 outline-none"
          />
        </div>
      </div>
    </main>
  );
}
