import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NoteCreation() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    // Save the note logic here
    navigate("/");
  };

  return (
    <div className="flex flex-col gap-4">
      <header className="flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-primary">
          Back
        </button>
        <button onClick={handleSave} className="bg-primary text-white px-4 py-2 rounded-lg">
          Save
        </button>
      </header>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border rounded-lg"
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border rounded-lg h-64"
        />
      </div>
    </div>
  );
}

export default NoteCreation;