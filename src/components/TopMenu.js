import React from 'react';

import TopMenuItem from "./TopMenuItem";

function TopMenu(props) {


  return (
    <div className="App">

      {props.topMenu.map(el => <TopMenuItem key={el} item={el}/> )}

    </div>
  );
}

export default TopMenu;
