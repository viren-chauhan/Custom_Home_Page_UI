import Navbar from "./pages/Navbar"
import "./home.scss"
import Top from "./pages/Top"
import Customers from "./pages/Customers"

export default function Home(){
    return(
        <div className="board">
            <Navbar />
            <div className="ui">
                <Top />
                <Customers />
            </div>
        </div>
    )
}