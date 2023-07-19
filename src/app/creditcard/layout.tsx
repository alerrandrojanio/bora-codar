import { Back } from "@/components/Back";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Back />
      <main
        className={` flex h-screen items-center justify-center bg-[#1f2937] leading-[130%] `}
      >
        <div
          id="app"
          className="flex w-full flex-col items-center justify-center gap-12 p-8"
        >
          {children}
        </div>
      </main>
    </>
  );
}
