 
import './App.css'; 
import Dictionary from "./Dictionary"; 
import logo from "./logo3.png"; 
 
export default function App() { 

  return ( 
    <div className="App"> 
      <header className="App-header"> 
      <img src={logo} alt="logo" className="img-fluid" />
      <h1>Dictionary<span className="punto">!</span></h1> 
      </header> 
      <main> 
        <Dictionary /> 
      </main> 
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/lara-chagas-mendes/" target="_blank"rel="noreferrer">Lara Mendes</a> and it's open sourced on <a href="https://github.com/LaraMendesss/dictionary-lara" target="_blank"rel="noreferrer">GitHub</a> and hosted on <a href="https://dictionary-lara.netlify.app/" target="_blank"rel="noreferrer">Netlify</a>.
        </footer> 
    </div> 
  ); 
} 


 

 

 

 
