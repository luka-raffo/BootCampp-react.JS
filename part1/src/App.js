import React from 'react';
import './App.css';
import Mensaje from './mensaje';


function App() {

  return (
    <div className="App">

     <Mensaje color="red" message="Estamos en" />
     <Mensaje color="green" message="un curso"/>
     <Mensaje color="blue" message="de Reacr.js"/>
    </div>
  );
}

export default App;
