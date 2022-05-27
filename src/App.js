import "./App.css";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";

function App() {

 
  require('dotenv').config()
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Main />
   
      </div>
    </BrowserRouter>
  );
}

export default App;
