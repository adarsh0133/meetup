import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Videopage from "./components/Videopage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:id" element={<Videopage />} />
      </Routes>
      {/* <Link to="/">Home</Link>
      <Link to="/room/:id">Videopage</Link> */}
    </div>
  );
};

export default App;
