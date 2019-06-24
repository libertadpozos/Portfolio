import React from "react";
import "./Footer.scss";

function Footer() {
return(
    <div className="footer__container">
       
        <ul class="rrss__container">
                                <li class="rss-addres"><a target="_blank" href="https://twitter.com/libertaadp"><i
                                class="fab fa-twitter"></i></a>
                                </li>
                                <li className="rss-addres"><a target="_blank" href="https://www.linkedin.com/in/libertadpozos"><i
                                className="fab fa-linkedin"></i></a> 
                                </li>
                                <li className="rss-addres"><a target="_blank" href="https://github.com/libertadpozos"><i
                                class="fab fa-github-alt"></i></a>
                                </li>
                                <div className="rss-addres"><a target="_blank" href="mailto:libertad.pozos@gmail.com"><i
                                class="fas fa-envelope"></i></a>
                                </div>
                            </ul>
                            

    </div>
)
}
export default Footer;