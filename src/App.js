import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./comp/Login";
import Signup from "./comp/Signup"
import Welcome from "./comp/Welcome"
import Homepage from "./comp/Homepage";
function App() {

  return (
    <>
      <Routes>
      <Route path="/" element={<Welcome />} exact></Route>
        <Route path="/signup" element={<Signup />} exact></Route>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/home" element={<Homepage />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
