"use client";

import Image from "next/image";
import { Form } from "@/components/creditcard/Form";

import { useState } from "react";
import { CreateCardFormData } from "@/components/creditcard/Form";

export default function Page() {
  const [data, setData] = useState<CreateCardFormData>();

  function createCard(data?: CreateCardFormData) {
    setData(data);
  }

  return (
    <>
      <section
        id="creditcard"
        className="perspective group h-[17rem] w-[28rem] cursor-pointer bg-transparent"
      >
        <div className="preserve-3d group-hover:my-rotate-y-180 relative duration-1000">
          <div id="front" className="backface-hidden absolute">
            <div className="flex h-[17rem] w-[28rem] flex-col justify-between rounded-lg bg-gradient-to-b from-violet-500 to-blue-500 px-8 py-8">
              <div className="flex items-center justify-between text-white">
                <Image
                  src="/creditcard/logo-visa.png"
                  alt="Logo visa"
                  width={64}
                  height={36}
                />
                <Image
                  src="/creditcard/contactless.png"
                  alt="Contactless"
                  width={24}
                  height={28}
                />
              </div>

              <div className="flex items-center justify-center text-white">
                <span className="text-xl tracking-widest text-white/80">
                  {data?.number ? data.number : "**** **** **** ****"}
                </span>
              </div>

              <div className="flex items-center justify-between text-white">
                <span className="tracking-wide text-white/80">
                  {data?.name ? data.name : "John Doe"}
                </span>
                <span className="tracking-wide text-white/80">
                  {data?.vality ? data.vality : "mm / aa"}
                </span>
              </div>
            </div>
          </div>

          <div
            id="back"
            className="my-rotate-y-180 backface-hidden absolute overflow-hidden"
          >
            <div className="flex h-[17rem] w-[28rem] flex-col justify-between rounded-lg bg-gradient-to-b from-violet-500 to-blue-500 py-8">
              <div className="h-16 bg-zinc-900" />
              <div className="mb-8 flex items-center justify-center gap-3 px-12">
                <div className="h-10 flex-1 rounded bg-zinc-200 p-2 text-right">
                  <span className="text-zinc-500">
                    {data?.cvv ? data.cvv : "***"}
                  </span>
                </div>
                <span className="tracking-wide text-white/80">CVV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Form createCard={createCard} />
    </>
  );
}
