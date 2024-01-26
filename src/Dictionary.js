 import React,{useState} from "react"; 
 import axios from "axios";
 import Results from "./Results";
 import "./Dictionary.css";

export default function Dictionary(props) { 
const [keyword,setKeyword]=useState(props.keyword);
const [results, setResults]=useState(null);
let [loaded, setLoaded] = useState(false);

    function handleResponse(response){

        setResults(response.data);}

    function search(){ 
    let apiKey=`dda9a648t200432eo3334f85db57e348`; 
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;

     axios.get(apiUrl).then(handleResponse);} 

    function handleSubmit(event){
        event.preventDefault(); 
        search();}

    function handleChange(event){
        setKeyword(event.target.value);}

        function load(){
            setLoaded(true);
            search();
        }

        if(loaded){
    return ( 

        <div className="intro"> 
        <form onSubmit={handleSubmit}> 
           <input className="" type="search" autoFocus={true} placeholder="Type the word here" onChange={handleChange}/> 
           <input type="submit" className="btn btn-primary" value="Search"/> 
        </form>     
        <Results className="results" results={results}/>
            </div>);} 
          else{
            load();
return null;

          }  
        }