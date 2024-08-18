import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import './index.css';

import reportWebVitals from './reportWebVitals';

const Counter = (props) => {
return <h1>{props.contador}</h1> 

}

const App = (props) => {
  const [contador, updateContador] = useState(13);
  
  const isEven = contador % 2 === 0;
  const mensajePar = isEven ? "es par" : "es impar";

  const handleClick = (isIncrement) => {
    const newContador = isIncrement ? contador + 1 : contador - 1;
    updateContador(newContador);
  }

  const handleClickReset = () => {
    updateContador(0);
  }

  return (  
    <div> 
      <Counter contador = {contador}/>
      <p>{mensajePar}</p>
      <button onClick={() => handleClick(true)}>Incrementar</button>
      <button onClick={() => handleClick(false)}>Decrementar</button>
      <button onClick={handleClickReset}>Reset</button>
    </div>
  );
}






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




reportWebVitals();
