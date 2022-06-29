import React from "react";
import Navbar from "./components/Navbar";
import Parent from "./components/Parent";
import { Route, Navigate, Routes } from "react-router-dom";

function App() {
  return (
    <div className>
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/parent" />} />
        <Route path="/parent" element={<Parent />} />
        

        
      </Routes> */}
      <Parent />
    </div>
  );
}

export default App;
