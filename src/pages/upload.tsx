import Head from "next/head"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Inter } from "next/font/google"
import { clsx } from "clsx"

import { CloudArrowUpIcon } from "@heroicons/react/24/outline"
import { UploadFile } from "@/components/UploadFile"
import { Back } from "@/components/Back"

const inter = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
})

export default function Upload() {
  const [isDropArea, setIsDropArea] = useState(false)

  useEffect(() => {
    const dropArea = document.querySelector("#drag")

    dropArea?.addEventListener("dragover", () => {
      setIsDropArea(true)
    })

    dropArea?.addEventListener("dragleave", () => {
      setIsDropArea(false)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Upload</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Back />
      <main className={`${inter.variable} font-inter h-screen leading-[130%]`}>
        <div
          id="app"
          className="h-screen w-full max-w-[500px]  m-auto flex flex-col justify-center items-center px-12"
        >
          <section
            id="drag"
            className={clsx(
              "px-14 py-10 bg-[#fbfaff] border border-dashed border-[#c1b2fa] rounded-xl flex flex-col items-center justify-center gap-2 relative",
              {
                "bg-violet-200": isDropArea === true,
              },
            )}
          >
            <CloudArrowUpIcon className="h-8 w-8 text text-[#7a5fec]" />

            <div>
              <h3 className="font-bold text-lg text-center text-[#7a5fec]">
                Importe seus aquivos
              </h3>
              <p className="text-center text-[#746e82]">
                Arraste e solte seus arquivos aqui ou clique para selecionar os
                arquivos
              </p>
            </div>

            <input type="file" className="opacity-0 inset-0 absolute" />
          </section>

          <section
            id="files"
            className="w-full mt-10 flex flex-col items-center gap-2 "
          >
            <UploadFile
              name="Scann_158.pdf"
              completed="30 MB"
              size="70 MB"
              progress={47}
            />
            <UploadFile name="README.md" size="12 KB" progress={100} />
            <UploadFile name="picture1.jpeg" size="6.3MB" progress={-1} />
          </section>
        </div>
      </main>
    </>
  )
}
