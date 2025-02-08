export const SeriesCard = (props) => {
    return (
        <li>
          <div>
            <img
              src={props.data.img_url}
              alt="money heist"
              height="30%"
              width="40%"
            />
          </div>
          <h2>Name: {props.data.name}</h2>
          <h3>Rating:{props.data.rating}</h3>
          <p>Summary: {props.data.description}</p>
          <p>Genre: {props.data.genre}</p>
          <p>Cast: {props.data.cast} </p>
          <a href={props.data.watch_url} target="_blank">
            <button>Watch Now</button>
          </a>
        </li>
    )
}; 