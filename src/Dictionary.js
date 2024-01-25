 import React,{useState} from "react"; 
 import axios from "axios";
 import Results from "./Results";

export default function Dictionary() { 
const [keyword,setKeyword]=useState("");
const [results, setResults]=useState(null);

    function handleResponse(response){

        setResults(response.data);
        
    }
    function search(event){ 
        event.preventDefault(); 
        let apiKey=`dda9a648t200432eo3334f85db57e348`; 
      let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

     axios.get(apiUrl).then(handleResponse);
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
        <Results results={results}/>
            </div>);} 