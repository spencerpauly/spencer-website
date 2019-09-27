import React, {Component} from 'react';
import Image from "react-bootstrap/Image";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerCopyright">
                    <span className="sketchyhardcoding">This is an easter egg, yay!</span>
                </div>
                <div class="footerImg">
                    <a href="#header">
                        <Image class="footerImgImg" src="./images/logo-secondary.png" fluid />
                    </a>
                </div>
                <div className="footerCopyright">
                    <span>Copyright Spencer Pauly 2019</span>
                </div>
            </div>
        );
    }
}
export default Footer;