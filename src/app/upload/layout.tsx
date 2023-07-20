import { PageLink } from "@/components/PageLink";
import { Upload } from "@/components/upload";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <PageLink href="/" />
      <main className={` h-screen leading-[130%]`}>
        <div
          id="app"
          className="m-auto flex h-screen  w-full max-w-[500px] flex-col items-center justify-center px-12"
        >
          {children}

          <section
            id="files"
            className="mt-10 flex w-full flex-col items-center gap-2 "
          >
            <Upload.Root>
              <Upload.Icon progress={100} />
              <Upload.Content name="README.md" size="12 KB" progress={100} />
            </Upload.Root>
            <Upload.Root>
              <Upload.Icon progress={47} />
              <Upload.Content name="Scann_158.pdf" size="70 MB" progress={47} />
            </Upload.Root>
            <Upload.Root>
              <Upload.Icon progress={-1} />
              <Upload.Content name="picture1.jpeg" size="6.3MB" progress={-1} />
              <Upload.Actions />
            </Upload.Root>
          </section>
        </div>
      </main>
    </div>
  );
}
