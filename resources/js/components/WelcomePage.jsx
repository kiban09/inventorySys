import React from "react"; 
import AppBar from "./AppBar";
import Styles from "../../css/Components.module.css";
import Poster from "./images/poster.jpg";

export default function(){
    return (
        <div> 
            <AppBar/>
            <img src={Poster} className = {Styles.poster} />
        </div>        
    );
}
