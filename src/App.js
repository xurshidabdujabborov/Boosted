import React from "react";
import About from "./components/About/About";
import Black from "./components/Black/Black";
import Electric from "./components/Electric/Electric";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Navbar  from "./components/Navbar/Navbsr";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Main/>
      <Electric/>
      <About/>
      <Black/>
      <Footer/>
    </div>
  );
}

export default App;
