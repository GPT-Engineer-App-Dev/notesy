import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const sampleNotes = [
  { id: 1, title: "Sample Note 1", content: "This is a sample note content." },
  { id: 2, title: "Sample Note 2", content: "This is another sample note content." },
  // Add more sample notes here
];

function Index() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl text-center">All Notes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sampleNotes.map((note) => (
          <div key={note.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-sm text-muted-foreground">{note.content}</p>
          </div>
        ))}
      </div>
      <Link to="/create" className="fixed bottom-4 right-4">
        <button className="p-4 bg-primary text-white rounded-full shadow-lg">
          <Plus className="h-6 w-6" />
        </button>
      </Link>
    </div>
  );
}

export default Index;