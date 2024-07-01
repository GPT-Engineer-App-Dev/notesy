const sampleArchivedNotes = [
  { id: 1, title: "Archived Note 1", content: "This is an archived note content." },
  { id: 2, title: "Archived Note 2", content: "This is another archived note content." },
  // Add more sample archived notes here
];

function Archived() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-center">Archived Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleArchivedNotes.map((note) => (
          <div key={note.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-sm text-muted-foreground">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Archived;