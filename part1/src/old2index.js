/*import React from 'react';
import ReactDOM from 'react-dom/client';
import {useState} from 'react';
import './index.css';


import reportWebVitals from './reportWebVitals';

const WarningOfClicks = () =>  {
    return <h1>no ah habido clicks aún</h1>
    }

const ContClicks = ({click}) =>    {
    return <p> {click.join(", ")}</p>
    }

const Reset_Counter = {
    
        left: 0,
        right: 0

}

function App(props) {





    const [counter, setCounter] = useState(Reset_Counter);

    const [click, setclick] = useState([]);

    const handleClickLeft = (event) => {
        console.log(event);
        const newCounterState = {
            ...counter,
            left: counter.left + 1,
        };
        setCounter(newCounterState);
        setclick((prevClick) => [...prevClick, "L"]);
    };

    const handleClickRight = () => {
        const newCounterState = {
            ...counter,
            right: counter.right + 1,
        };
        setCounter(newCounterState);
        setclick((prevClick) => [...prevClick, "R"]);

    };

    const handleReset = () =>   {
        setCounter(Reset_Counter)
    }



    return (
        <div>
            {counter.left}
            <button onClick={handleClickLeft}>left</button>
            <button onClick={handleClickRight}>right</button>
            {counter.right}
            <br></br>
            <button onClick={handleReset}>resetear</button>
            <br></br>

            <label>cantidad de clicks:</label>
            {click.length}
            <br></br>

            {click.length === 0
                ? (<WarningOfClicks />

                ) : (
                    <ContClicks click={click} />
                )}




        </div>
    );
}
  









const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();*/
