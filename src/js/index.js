//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondsCounter from "./component/SecondsCounter.jsx";

//render your react application

let n = 0;

setInterval(function(){
    //console.log(n)
    ReactDOM.render(<SecondsCounter seconds={n} />, document.querySelector('#app'))
    n++;

}, 1000)

