import Head from "next/head"
import Image from "next/image"
import { useState } from "react"

import { Titillium_Web } from "next/font/google"

import Background from "../../public/img/img.jpg"
import Logo from "../../public/img/logo.svg"
import Eye from "../../public/img/eye.svg"
import EyeOff from "../../public/img/eye-off.svg"
import { Back } from "@/components/Back"

const titillium = Titillium_Web({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-titillium",
})

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)

  function togglePassword() {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${titillium.variable} font-titillium `}>
        <Back />
        <div className="h-screen flex">
          <div className="w-1/2 py-12  max-sm:px-8 max-sm:w-full sm:px-8 sm:py-8 xl:px-24 2xl:px-40 ">
            <Image
              src={Logo}
              alt="Logo"
              className="w-64 h-20 max-sm:mt-10 md:mt-10 sm:mt-14"
            />

            <div className="mt-24 md:mt-10 sm:mt-10 max-sm:mt-6">
              <div className="max-w-xl w-3/4 max-sm:w-full ">
                <h1 className="text-4xl font-bold text-gray-800 ">
                  Acesse a plataforma
                </h1>
                <p className="text-gray-600 text-lg mt-4 sm:text-md max-sm:text-base">
                  Faça login ou registre-se para começar a construir seus
                  projetos ainda hoje.
                </p>
              </div>

              <form className="mt-16 max-sm:mt-8 sm:mt-8">
                <div className="flex flex-col space-y-2">
                  <label
                    htmlFor="email"
                    className="font-semibold text-[#1E293B] text-lg max-sm:text-base"
                  >
                    E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="w-full py-3 px-4 bg-white border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] max-sm:py-2"
                    required
                  />
                </div>

                <div className="mt-7 flex flex-col space-y-2 relative">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="font-semibold text-[#1E293B] text-lg max-sm:text-base"
                    >
                      Senha
                    </label>
                    <a
                      href="#"
                      className="text-[#7C3AED] font-semibold text-lg rounded focus:outline-none focus:ring-2 focus:ring-[#9f67ff] hover:text-[#9f67ff] max-sm:text-base"
                    >
                      Esqueceu a senha?
                    </a>
                  </div>

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full py-3 px-4 bg-white border border-[#e2e8f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] max-sm:py-2"
                    required
                  />
                  {showPassword ? (
                    <Image
                      src={EyeOff}
                      className="h-8 w-8 absolute top-[44%] right-[3%] cursor-pointer max-sm:h-6 max-sm:w-6"
                      alt="Eye"
                      onClick={togglePassword}
                    />
                  ) : (
                    <Image
                      src={Eye}
                      className="h-8 w-8 absolute top-[44%] right-[3%] cursor-pointer max-sm:h-6 max-sm:w-6"
                      alt="Eye"
                      onClick={togglePassword}
                    />
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full my-12 bg-[#7c3aed] flex justify-center items-center py-4 px-10 rounded-xl text-white text-lg font-bold active:outline-2 active:outline-[#7c3aed] focus:outline-2 focus:outline-[#9f67ff] hover:bg-[#9f67ff] max-sm:py-2 max-sm:my-8"
                >
                  Entrar
                </button>

                <div className="text-gray-600 text-lg max-sm:text-base ">
                  Ainda não tem conta?{" "}
                  <a
                    href="#"
                    className="text-[#7C3AED] rounded focus:outline-none focus:ring-2 focus:ring-[#9f67ff] hover:text-[#9f67ff]"
                  >
                    Inscreva-se
                  </a>
                </div>
              </form>
            </div>
          </div>

          <Image
            src={Background}
            alt="Background"
            className="w-1/2 max-sm:hidden min-sm:hidden"
            objectFit="cover"
          />
        </div>
      </main>
    </>
  )
}
