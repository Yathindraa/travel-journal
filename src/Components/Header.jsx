import globe from "../assets/globe.jpg";
import "../App.css"
export default function Header(){
    return(
        <header className="header"> 
        {/* Since I am importing this is how it shd be written */}
            <img src={globe} alt="Globe Icon" />
            <h1> My Travel Journal </h1>
        </header>
    )
}