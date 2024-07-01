import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import NoteCreation from "./pages/NoteCreation.jsx";
import NoteViewEdit from "./pages/NoteViewEdit.jsx";
import Archived from "./pages/Archived.jsx";
import Trash from "./pages/Trash.jsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner.jsx";
import SharedLayout from "./components/layouts/sidebar.jsx";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Index />} />
              <Route path="create" element={<NoteCreation />} />
              <Route path="note/:id" element={<NoteViewEdit />} />
              <Route path="archived" element={<Archived />} />
              <Route path="trash" element={<Trash />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;