import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {

if (props.results){
return(
    <div className="results">
      <div className="wordphonetic">
        <h2 className="text-capitalize">{props.results.word}</h2>
        <h4 className="phonetics"> <span className="icon">🔊</span> "{props.results.phonetic}"</h4>
        </div>
   {props.results.meanings.map(function (meaning, index) { 
return ( 
<div key={index}> 
<Meaning meaning={meaning} /> 
   </div>); 
 })} </div>  
);}
else{ return null;
} }