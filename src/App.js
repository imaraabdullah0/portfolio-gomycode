import  React  from "react";
import {BrowserRouter ,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyProject from "./components/MyProject";
import My2 from "./components/My2";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
     <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/myworks' element={ <My2 />} />
          <Route path='/contacts' element={<MyProject />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
