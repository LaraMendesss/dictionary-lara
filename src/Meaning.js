import React from "react";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props){

return(
<div className="Meaning">

<h3 className="text-capitalize name">{props.meaning.partOfSpeech}</h3> 
<p className="text-capitalize definition">{props.meaning.definition}.</p>


<Example example={props.meaning.example} />
<Synonyms synonyms={props.meaning.synonyms} />
</div>
);

}