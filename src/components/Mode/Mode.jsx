import React from "react";
import "./mode.scss"
import imgDark from "../../assets/dark.svg"

const Mode =()=> {
return(<div className="container-mode">
    <div className="container-mode__title" >
    <p>devfinder</p>
    </div>
    <div className="container-mode__dark">
        <p>DARK</p>
        <img src={imgDark} alt="" />
    </div>


</div>)

}

export default Mode;