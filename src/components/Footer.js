import React from 'react';
import FooterMenu from "./FooterMenu";

function Footer(props) {

    const footerMenu = ['Shipping', 'Privacy Policy', 'Help and Support', 'Map'];

    return (
        <div className="App">

            <FooterMenu footerMenu={footerMenu}/>

        </div>
    );
}

export default Footer;
