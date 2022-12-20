import React from "react"
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
    return(
        <header> 
        <div className="headerLeft">
            <img className="header_icon" src="https://cdn-icons-png.flaticon.com/512/4221/4221419.png" alt="logo"/>
            <Link to="/" style={{textDecoration: "none"}}><span>Home</span></Link>
            <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
            <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
            <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
        
        </div>
    
        </header>
       
    )
}
export default Header