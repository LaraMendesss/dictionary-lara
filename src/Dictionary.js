 import React from "react"; 

export default function Dictionary() { 

 


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