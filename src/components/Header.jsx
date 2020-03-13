import React from "react";

function Header(props){
  return(
    <header>
      <div className="head-content">
        <div className="head-title">{props.intro.headTitle}</div>
        <div className="head-body">
          {props.intro.headBody}
        </div>
      </div>
    </header>
  )
}

export default Header;
