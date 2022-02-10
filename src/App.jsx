import React from "react";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NavBar from "./components/Navbar";
import { Routes, Route} from "react-router-dom";


function App() {
    return (
        <>
      <NavBar />
      <Routes>
        <Route exatc path="/" element={<Home />} />        
        <Route path="/details/:movie_id" element={<Details />} />      
      </Routes>
      
    </>
  )
}
export default App;
