import './bootstrap';
import React from "react";
import Welcome from "../js/components/WelcomePage";
import Left from "./components/LeftNavBar";


export default function(){
    return <div>
        <Welcome/>
        <Left/>
    </div>

}