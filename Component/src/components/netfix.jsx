import seriesData from "../api/seriesData.json";
const Netflixseries = () => {
  return (
    <>
      <ul>
        
          {seriesData.map((currEle)=>{
            return (
              <li key={currEle.id}>
          <div>
            <img
              src={currEle.img_url}
              alt="money heist"
              height="30%"
              width="40%"
            />
          </div>
          <h2>Name: {currEle.name}</h2>
          <h3>Rating:{currEle.rating}</h3>
          <p>Summary: {currEle.description}</p>
          <p>Genre: {currEle.genre}</p>
          <p>Cast: {currEle.cast} </p>
          <a href={currEle.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>
            );
          })}
        
        
      </ul>
    </>
  );
};
export const Header = () => {
  return <h1>Welcome to Netflix</h1>;
};
export default Netflixseries;
