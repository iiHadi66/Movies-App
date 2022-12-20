import React from "react"
import "./footer.css"

const Footer = () => {
    return(
        <footer>
        <div class="footer-content">
            <h3>EC MOVIES APP</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quod amet exercitationem.</p>
            <ul class="socials">
                <li><a href="https://www.facebook.com/" aria-hidden="true"><i class="fa fa-facebook"></i></a></li>
                <li><a href="https://twitter.com/" aria-hidden="true"><i class="fa fa-twitter"></i></a></li>
                <li><a href="https://www.google.se/?hl=sv" aria-hidden="true"><i class="fa fa-google-plus"></i></a></li>
                <li><a href="https://www.instagram.com/" aria-hidden="true"><i class="fa fa-instagram"></i></a></li>
                <li><a href="https://www.snapchat.com/sv-SE" aria-hidden="true"><i class="fa fa-snapchat"></i></a></li>
            </ul>
        </div>
        <div class="footer-bottom">
            <p>copyright©2022 EC Movies App. designed by <span>HADI</span></p>
        </div>
    </footer>
       
    )
}
export default Footer
