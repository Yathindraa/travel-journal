import mapmarker from "../assets/MapMarker.png"
export default function Entry(props) {
        return(
            <>
        <article className="article-1">
            <div className="main-image-container">
               <img src={props.img.src}
                alt={props.img.alt}
                />
            </div>
            <div className="content">
                <div className="location-row">  
                <img className="map-marker" src={mapmarker} alt="Map Marker"/>
                <p>{props.country}</p>
                <a href={props.gmapslink}> View on Google Maps </a>
                </div>
                <h2 className="place-name"> {props.title} </h2>
                <p> {props.dates}</p>
                <p> {props.text}</p>
            </div>
        </article>
        </>
    )
}