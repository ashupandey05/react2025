import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
const Netflixseries = () => {
  return (
    <>
      <ul>
        
          {seriesData.map((currEle)=>(
            <SeriesCard key={currEle.id} data={currEle}/>
            
          ))}
        
        
      </ul>
    </>
  );
};
export const Header = () => {
  return <h1>Welcome to Netflix</h1>;
};
export default Netflixseries;
