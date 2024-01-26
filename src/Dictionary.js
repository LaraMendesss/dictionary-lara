 import React,{useState} from "react"; 
 import axios from "axios";
 import Results from "./Results";
 import "./Dictionary.css";
 import Photos from "./Photos";

export default function Dictionary(props) { 
const [keyword, setKeyword]=useState(props.keyword);
const [results, setResults]=useState(null);
const [loaded, setLoaded] = useState(false);
const[photos, setPhotos]=useState(null);

    function handleResponse(response){

        setResults(response.data);}

    function handlePhotoResponse(response){
        setPhotos(response.data.photos);
    }

    function search(){ 
    let apiKey=`dda9a648t200432eo3334f85db57e348`; 
    let apiUrl=`https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

   
    let photoapiKey=`dda9a648t200432eo3334f85db57e348`;
    let photoapiUrl=`https://api.shecodes.io/images/v1/search?query=${keyword}&key=${photoapiKey}`;


     axios.get(photoapiUrl).then(handlePhotoResponse);} 

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
        <form id="form" onSubmit={handleSubmit}> 
           <input className="" type="search" autoFocus={true} placeholder="Type the word here" onChange={handleChange}/> 
           <input type="submit" className="btn btn-primary" value="Search"/> 
        </form>     
        <Results className="results" results={results}/>
        <Photos photos={photos} />
            </div>);} 
          else{
            load();
return null;

          }  
        }