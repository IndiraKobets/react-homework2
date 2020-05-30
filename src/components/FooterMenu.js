import React from 'react';
import FooterMenuItem from "./FooterMenuItem";



function FooterMenu (props) {


  return (
    <div className="App">

      {props.footerMenu.map(el => <FooterMenuItem key={el} footeritem={el}/>)}

    </div>
  );
}

export default FooterMenu;
