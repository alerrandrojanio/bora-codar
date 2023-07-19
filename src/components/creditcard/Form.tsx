import ReactInputMask from "react-input-mask";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const createCardFormSchema = z.object({
  number: z
    .string()
    .nonempty("O número do cartão é obrigatório")
    .min(19, "O número deve conter 16 dígitos"),
  name: z
    .string()
    .nonempty("O nome é obrigatório")
    .transform((name) => {
      return name
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  vality: z.string().nonempty("A validade é obrigatória"),
  cvv: z
    .string()
    .nonempty("O CVV é obrigatório")
    .min(3, "O CVV deve conter 3 dígitos")
    .max(3, "O CVV deve conter 3 dígitos"),
});

export type CreateCardFormData = z.infer<typeof createCardFormSchema>;

interface FormProps {
  createCard: () => void;
}

export function Form({ createCard }: FormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<CreateCardFormData>({
    resolver: zodResolver(createCardFormSchema),
  });

  return (
    <section className="w-[28rem]">
      <form onSubmit={handleSubmit(createCard)} className="flex flex-col gap-4">
        <div className="input-wrapper flex h-20 flex-col justify-start">
          <label htmlFor="number" className="text-white">
            Número do cartão
          </label>
          <ReactInputMask
            mask="9999 9999 9999 9999"
            maskChar={null}
            max={19}
            placeholder="**** **** **** ****"
            className="mt-1 w-full rounded border border-[#374151] bg-[#111827] px-2 py-3 text-[#f3f4f6] focus:border-transparent focus:outline-none focus:ring-1 focus:ring-violet-500"
            {...register("number")}
          />

          {errors.number && (
            <span className="flex p-1 text-xs text-red-500">
              {errors.number.message}
            </span>
          )}
        </div>

        <div className="input-wrapper flex h-20 flex-col justify-start">
          <label htmlFor="name" className="text-[#e5e7eb] ">
            Nome do titular
          </label>
          <input
            id="name"
            type="text"
            maxLength={30}
            placeholder="Nome como está no cartão"
            className="mt-1 w-full rounded border border-[#374151] bg-[#111827] px-2 py-3 text-[#f3f4f6] focus:border-transparent focus:outline-none focus:ring-1 focus:ring-violet-500"
            {...register("name")}
          />
          {errors.name && (
            <span className="flex p-1 text-xs text-red-500">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="flex gap-4">
          <div className="flex h-20 basis-[80%] flex-col justify-start">
            <label htmlFor="validity" className="text-[#e5e7eb] ">
              Validade
            </label>
            <ReactInputMask
              mask="99 / 99"
              id="validity"
              type="text"
              placeholder="mm/aa"
              className="mt-1 w-full rounded border border-[#374151] bg-[#111827] px-2 py-3 text-[#f3f4f6] focus:border-transparent focus:outline-none focus:ring-1 focus:ring-violet-500"
              {...register("vality")}
            />
            {errors.vality && (
              <span className="flex p-1 text-xs text-red-500">
                {errors.vality.message}
              </span>
            )}
          </div>
          <div className="flex h-20 flex-col justify-start">
            <label htmlFor="cvv" className="text-[#e5e7eb]">
              CVV
            </label>
            <input
              id="cvv"
              type="text"
              maxLength={3}
              placeholder="***"
              className="mt-1 w-full rounded border border-[#374151] bg-[#111827] px-2 py-3 text-[#f3f4f6] focus:border-transparent focus:outline-none focus:ring-1 focus:ring-violet-500"
              {...register("cvv")}
            />
            {errors.cvv && (
              <span className="flex p-1 text-xs text-red-500">
                {errors.cvv.message}
              </span>
            )}
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 w-full rounded bg-violet-500 py-3 text-white hover:bg-violet-600"
        >
          Salvar
        </button>
      </form>
    </section>
  );
}
