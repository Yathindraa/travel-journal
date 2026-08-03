import "../App.css"
export default function Entry() {
        return(
            <>
        <article className="article-1">
            <div className="main-image-container">
            <img className="mt-fuji" src="src/assets/mtfuji.avif" alt="Mount Fuji"/>\
            </div>
            <div className="content">
                <div className="location-row">  
                <img className="map-marker" src="src/assets/MapMarker.png" alt="Map Marker"/>
                <p> JAPAN </p>
                <a href="https://www.google.com/maps/place/Mount+Fuji/@35.360625,138.7273634,2195m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer"> View on Google Maps </a>
                </div>
                <h2 className="place-name"> Mount Fuji </h2>
                <p> 12 Jan, 2021 - 24 Jan, 2021</p>
                <p> Mount Fuji is Japan's highest peak, a sacred symbol, and an active volcano. Rising 3,776 meters (12,389 feet),
                    it sits on Honshu island near the Pacific coast, roughly 100 km west of Tokyo</p>
            </div>
        </article>
        </>
    )
}