import './style.css';
import Header from "./Header.tsx";
import Main from "./Main.tsx";
import Essentials from "./Essentials.tsx";

export default function Blog() {



    return (
        <div className="wrapper">
            <Header/>
            <Main/>
            <Essentials/>
        </div>

    )
}