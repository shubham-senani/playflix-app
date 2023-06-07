import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../logo.png"
import { useState } from "react"
const Navbar = () => {
    const [bar, SetBar] = useState(false);
    
    const toggle = ()=>{
        if(bar == false){
            SetBar(true);
        }else{
            SetBar(false)
        }
    }

    return (
        <nav className="sticky-top navbar navbar-expand-custom navbar-mainbg">
            <Link className="navbar-brand navbar-logo" to="/" ><img src={logo} width="60px" /></Link>
            <button onClick={toggle} className="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
            <div  className = {`${bar ? "": "collapse"} navbar-collapse`} id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {/* <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div>
                    </div> */}
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fa fa-lg fa-fw fa-home" aria-hidden="true"></i>Home</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/" className="nav-link"><i className="fa fa-lg fa-fw fa-camera" aria-hidden="true"></i>TV Shows</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fa fa-lg fa-fw fa-film" aria-hidden="true"></i>Movies</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fa fa-lg fa-fw fa-globe" aria-hidden="true"></i>Web Series</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-link"><i className="fa fa-lg fa-fw fa-cart-plus" aria-hidden="true"></i>Watchlist</Link>
                    </li>
                </ul>
            </div>
        </nav> 
    )
}
export default Navbar
