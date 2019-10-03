import React, {Component} from 'react';
import {Image} from "cloudinary-react";
import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footerCopyright">
                    <span className="sketchyhardcoding">This is an easter egg, yay!</span>
                </div>
                <div className="footerImg">
                    <a href="#header">
                        <Image className="footerImgImg" cloudName="spencerpauly" publicId="projects/logo-secondary_mbjinr.png" width="70" crop="scale"/>
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