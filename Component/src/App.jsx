import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Netflixseries, {Header} from "./components/netfix.jsx";
// import './App.css'

function App() {
  return (
    <>
      <Header />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
    </>
  );
}


export default App;
