import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Homepage from "./Pages/Homepage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Employees from "./components/Employees";
import Team from "./components/CreateTeamForm";
import CreateTeamForm from "./components/CreateTeamForm";

function App() {
  return (
    <div>
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employees" element={<Employees/>} />
          <Route path="/create-team" element={<CreateTeamForm />} />
        </Routes>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
