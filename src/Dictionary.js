 import React,{useState} from "react"; 

export default function Dictionary() { 
const [keyword,setKeyword]=useState("");


    function search(event){ 
        event.preventDefault(); 
        alert(`Searching for ${keyword} definition...`); 
    } 

    function handleChange(event){
        setKeyword(event.target.value);
   
    }
    return ( 

        <div className="intro"> 
        <form onSubmit={search}> 
           <input className="" type="search" autoFocus={true} onChange={handleChange}/> 

           <input type="submit" value="Search"/> 


        </form>     

            </div>); 

} 