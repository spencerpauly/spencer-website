import React, {Component} from 'react';
import {Image} from "cloudinary-react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <section id="footer" className="footer">
                <div className="footerSubsection">
                    <span className="easteregg">This is an easter egg, yay!</span>
                </div>
                <div className="footerImgSection">
                    <a href="#header">
                        <Image className="footerImg" cloudName="spencerpauly" publicId="projects/logo-secondary_mbjinr.png" width="70" crop="scale"/>
                    </a>
                </div>
                <div className="footerSubsection">
                    <span>Copyright Spencer Pauly 2019</span>
                </div>
            </section>
        );
    }
}
export default Footer;