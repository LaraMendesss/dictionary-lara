 import React, {useState} from "react"; 

export default function Dictionary() { 

    let [keyword, setKeywork]=useState(""); 


    function search(event){ 

        event.preventDefault(); 

        alert("Searching" 

        ); 

    } 

     

     

    return ( 

        <div ClassName="intro"> 

             

        <form onSubmit={search}> 

             

           <input className="" type="search" autoFocus={true}/> 

           <input type="submit" value="Search"/> 

 

             

         

         

        </form>     

            </div>); 

} 