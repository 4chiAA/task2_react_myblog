import './style.css';
import Picture from "./Picture.tsx";
import Recipe from "./Recipe.tsx";

export default function Main() {



    return (
        <div className="flex-container">
            <div className="section1"> <Picture/> </div>
            <div className="section2"> <Recipe/> </div>
        </div>
    )
}