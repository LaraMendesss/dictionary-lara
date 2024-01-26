import React from "react";

export default function Meaning(props){

return(
<div className="Meaning">

<h3 className="text-capitalize name">{props.meaning.partOfSpeech}:</h3> 
<p className="text-capitalize definition">{props.meaning.definition}.</p>
<p className="text-capitalize example"><strong></strong>{props.meaning.example}</p>
</div>
);

}