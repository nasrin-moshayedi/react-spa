import React from "react";
import {BrowserRouter} from 'react-router-dom';
import MainPage from "./imports/components/MainPage";
import "./assets/css/AppStyle.css";
function App() {
  return(
    <BrowserRouter>
      <div className="App">
        <MainPage title='nasrin'/>
      </div>
    </BrowserRouter>
  )
}

export default App;
