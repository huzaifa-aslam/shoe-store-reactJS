import React from "react";
import "./App.css";
import Routes from "./Routes/Routes";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from './components'



function App() {
  return (
    <div >

      <Routes />
      <Footer/>
    </div>
  );
}

export default App;
