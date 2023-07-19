"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";

import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

export default function Page() {
  const [isDropArea, setIsDropArea] = useState(false);

  useEffect(() => {
    const dropArea = document.querySelector("#drag");

    dropArea?.addEventListener("dragover", () => {
      setIsDropArea(true);
    });

    dropArea?.addEventListener("dragleave", () => {
      setIsDropArea(false);
    });
  }, []);

  return (
    <section
      id="drag"
      className={clsx(
        "relative flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-[#c1b2fa] bg-[#fbfaff] px-14 py-10",
        {
          "bg-violet-200": isDropArea === true,
        }
      )}
    >
      <CloudArrowUpIcon className="text h-8 w-8 text-[#7a5fec]" />

      <div>
        <h3 className="text-center text-lg font-bold text-[#7a5fec]">
          Importe seus aquivos
        </h3>
        <p className="text-center text-[#746e82]">
          Arraste e solte seus arquivos aqui ou clique para selecionar os
          arquivos
        </p>
      </div>

      <input type="file" className="absolute inset-0 opacity-0" />
    </section>
  );
}
