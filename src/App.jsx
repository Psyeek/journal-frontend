import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import JournalEntry from "./pages/JournalEntry";
import Pomodoro from "./pages/Pomodoro";
import ActivityTracker from "./pages/ActivityTracker";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/journal" element={<JournalEntry />} />
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/activity" element={<ActivityTracker />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
