"use client";

import { useEffect, useState } from "react";

import clsx from "clsx";
import { Upload } from "@/components/upload";
import { Back } from "@/components/Back";

import { CloudArrowUpIcon } from "@heroicons/react/24/solid";
import { UploadIcon } from "@/components/upload/UploadIcon";
import { UploadContent } from "@/components/upload/UploadContent";

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
    <div>
      <Back />
      <main className={` h-screen leading-[130%]`}>
        <div
          id="app"
          className="m-auto flex h-screen  w-full max-w-[500px] flex-col items-center justify-center px-12"
        >
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

          <section
            id="files"
            className="mt-10 flex w-full flex-col items-center gap-2 "
          >
            <Upload.Root>
              <UploadIcon progress={100} />
              <UploadContent name="README.md" size="12 KB" progress={100} />
            </Upload.Root>
            <Upload.Root>
              <UploadIcon progress={47} />
              <UploadContent name="Scann_158.pdf" size="70 MB" progress={47} />
            </Upload.Root>
            <Upload.Root>
              <UploadIcon progress={-1} />
              <UploadContent name="picture1.jpeg" size="6.3MB" progress={-1} />
              <Upload.Actions />
            </Upload.Root>
          </section>
        </div>
      </main>
    </div>
  );
}
