import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Route, Router, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
     
    {loading ? <Loader /> :  
   <><div className="bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen">
    <Routes>
        <Route path="/" element={<> <Nav/> <Home/></>}/>
        <Route path="/signup" element={ <Signup/>}/>
        <Route path="/login" element={ <Login/>}/>
      </Routes>
    </div></>}
    
  
    </>
  )
};

export default App;
