import { ChangeEvent, useState } from "react";
import logo from "./assets/logo-expert.svg";
import { NewNoteCard } from "./components/add-new-note";
import { NoteCard } from "./components/note-card";

interface Note {
  id: string;
  date: Date;
  content: string;
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = localStorage.getItem("notes");

    if (savedNotes) {
      return JSON.parse(savedNotes);
    }

    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem("notes", JSON.stringify(notesArray));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const filteredNotes =
    search !== ""
      ? notes.filter(note =>
          note.content.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  return (
    <main className="mx-auto max-w-6xl my-12 space-y-6">
      <img src={logo} alt="NLW Expert Logo" />

      <form className="w-full">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Busque suas notas..."
          className="w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none"
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <NewNoteCard onNoteCreated={onNoteCreated} />

        {filteredNotes.map(note => (
          <NoteCard
            key={note.id}
            note={{ content: note.content, date: note.date }}
          />
        ))}
      </div>
    </main>
  );
}
