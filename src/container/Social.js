import React from 'react'
import {AiOutlineGithub} from "react-icons/ai"
import {FaInstagram} from "react-icons/fa"
import {FaLinkedinIn} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import "../assets/style.css"

const Social = () => {
    return (
        <div class="boxArea social-menu">
        <ul>
            <li><a href="https://github.com/olashina201" target="blank"><AiOutlineGithub style={{width: "200px"}} /></a></li>
            <li><a href="https://www.instagram.com/imsanketbodke/" target="blank"><FaInstagram /></a></li>
            <li><a href="https://www.linkedin.com/in/sanket-bodake-995b5b205/" target="blank"><FaLinkedinIn /></a></li>
            <li><a href="https://codepen.io/sanketbodke"><FaTwitter /></a></li>
        </ul>
    </div>
    )
}

export default Social
