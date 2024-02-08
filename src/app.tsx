import logo from "./assets/logo-expert.svg";
import { AddNewNote } from "./components/add-new-note";
import { NoteCard } from "./components/note-card";

export function App() {
  return (
    <main className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert Logo" />

      <form className="w-full">
        <input
          type="text"
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <AddNewNote />

        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
        <NoteCard note={{ date: new Date(2023, 6, 2), content: "lorem" }} />
      </div>
    </main>
  );
}
