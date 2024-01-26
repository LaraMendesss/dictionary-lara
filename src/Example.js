import React from "react";


export default function Example(props){

    if(props.example){
return (
    <div className="text-capitalize example">
    <strong>Example: </strong>{props.example}.

    </div>)
    }
    else{
        return null;
    }
}

