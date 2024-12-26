import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'

function App() {
  return (
    <>
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
      <Netflixseries />
    </>
  );
}
const Netflixseries = () => {
  const name = "Money Heist";
  const summary =
    "When the national mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do theyknow that the thieves have a bigger plan in store.";
  
  const getGenre = ()=>{
    const genre = "Thriller";
    return genre;
  }
  return (
    <>
      <div>
        <img src="img12.jpeg" alt="money heist" height="30%" width="40%" />
      </div>
      <h2>Name: {name}</h2>
      <h3>Rating:{5 + 3.2}</h3>
      <p>{summary}</p>
      <p>Genre: {getGenre()}</p>
    </>
  );
};

export default App;
