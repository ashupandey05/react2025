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
  return (
    <>
      <div>
        <img src="img12.jpeg" alt="money heist" height="30%" width="40%" />
      </div>
      <h2>Name: Money Heist</h2>
      <h3>Rating: 8.2</h3>
      <p>
        When the national mint and a touring school group are held hostage by
        robbers, police believe that the thieves have no way out. Little do they
        know that the thieves have a bigger plan in store.
      </p>
    </>
  );
};

export default App;
