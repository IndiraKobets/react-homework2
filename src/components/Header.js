import React from 'react';

import TopMenu from "./TopMenu";

function Header(props) {

  const topMenu = ['About', 'Products', 'Price', 'Contact'];

  return (
    <div className="App">

<TopMenu topMenu={topMenu}/>

    </div>
  );
}

export default Header;
