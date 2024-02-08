import * as Dialog from "@radix-ui/react-dialog";
import { CheckCircle2Icon, X } from "lucide-react";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "sonner";
import colors from "tailwindcss/colors";

export function AddNewNote() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [content, setContent] = useState("");

  function handleStartEditor() {
    setShouldShowOnboarding(false);
  }

  function handleContentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setContent(event.target.value);
    console.log(event.target.value);
    if (event.target.value.trim() === "") {
      setShouldShowOnboarding(true);
    }
  }

  function handleSaveNote(event: FormEvent) {
    event.preventDefault();

    toast.success("Nota criada com sucesso", {
      unstyled: true,
      icon: <CheckCircle2Icon className="size-5 " color={colors.lime[400]} />,
      classNames: {
        toast:
          "flex w-full flex-row p-4 items-center gap-3 bg-slate-600 text-sm font-medium rounded-md ring-2 ring-slate-600",
      },
    });
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 text-left flex flex-col gap-y-3 outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-green-400">
        <span className="text-sm font-medium text-slate-200">
          Adicionar nota
        </span>

        <p className="text-sm leading-6 text-slate-400">
          Grave uma nota em áudio que ela será convertida para texto
          automaticamente
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed h-[60vh] left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none overflow-hidden">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-medium text-slate-300">
                Adicionar nota
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{" "}
                  <button className="text-lime-400 font-medium hover:underline">
                    gravando uma nota
                  </button>{" "}
                  em áudio ou se preferir{" "}
                  <button
                    className="text-lime-400 font-medium hover:underline"
                    onClick={handleStartEditor}
                  >
                    utilize apenas texto
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  placeholder="Digite uma note..."
                  content={content}
                  onChange={handleContentChange}
                ></textarea>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-lime-400 font-medium py-4 text-center text-sm text-lime-950 outline-none hover:bg-lime-500 transition-colors"
            >
              Salva nota
            </button>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
