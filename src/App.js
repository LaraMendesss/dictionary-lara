 
import './App.css'; 
import Dictionary from "./Dictionary"; 
import logo from "./logo3.png"; 
 
export default function App() { 

  return ( 
    <div className="App"> 
      <header className="App-header"> 
      <img src={logo} alt="logo"/>Dictionary! 
      </header> 
      <main> 
        <Dictionary /> 
      </main> 
      <footer>This project was coded by <a href="/" target="_blank"rel="noreferrer">Lara Mendes</a> and it's open sourced on <a href="/" target="_blank"rel="noreferrer">GitHub</a> and hosted on <a href="/" target="_blank"rel="noreferrer">Netlify</a>.</footer> 
    </div> 
  ); 
} 


 

 

 

 
