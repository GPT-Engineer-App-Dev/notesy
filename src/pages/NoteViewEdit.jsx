import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const sampleNotes = [
  { id: 1, title: "Sample Note 1", content: "This is a sample note content." },
  { id: 2, title: "Sample Note 2", content: "This is another sample note content." },
  // Add more sample notes here
];

function NoteViewEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = sampleNotes.find((note) => note.id === parseInt(id));
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleSave = () => {
    // Save the note logic here
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-primary">
          Back
        </button>
        {isEditing ? (
          <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-lg">
            Save
          </button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-primary text-white px-4 py-2 rounded-lg">
            Edit
          </button>
        )}
      </header>
      <div className="flex flex-col gap-2">
        {isEditing ? (
          <>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="p-2 border rounded-lg"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="p-2 border rounded-lg h-64"
            />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold">{title}</h2>
            <p>{content}</p>
          </>
        )}
      </div>
    </div>
  );
}

export default NoteViewEdit;