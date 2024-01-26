import React from "react";

export default function Meaning(props){

return(
<div className="Meaning">

<h3 className="text-capitalize name">{props.meaning.partOfSpeech}:</h3> 
<span className="text-capitalize definition">{props.meaning.definition}.</span>
<p className="text-capitalize example"><strong></strong>{props.meaning.example}</p>
</div>
);

}