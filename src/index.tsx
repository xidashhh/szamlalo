import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MultipliactionTable from "./szorzotabla";
import Counter from "./Counter";
import { CounterClass } from './CounterClass';
import Clock, { Clocks } from './Clock';
import IncreaseButton from './szamlalo';
import CounterButtons from './CounterButtons';
import { NameForm } from './FormDemo';
import PanelOutput from './Panel';
import Accordion from './Accordion';
import TodoList from './ToDoList';
import TodoListOne from './ToDoListOnlyONe';
import TodoItem from './ToDoPropsList';
import TodoListAsync from './ToDoListAsyncThing';
import Records from './Records';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  
);

// setInterval(() =>{
//   let children = <React.StrictMode>
//     <input/>
//     <button onClick={()=>{alert('hello')}}>
//       Szia
//     </button>
//     {new Date().toISOString()}
//     </React.StrictMode>
//     root.render(
//   children
// );
// }, 1000)

// név, kor, szai, xy, 32 éves vagy


//const rootElement = document.getElementById('root') as HTMLElement

//const input = document.createElement('input');
//rootElement.appendChild(input);

//const container = document.createElement('div');
//rootElement.appendChild(container)


//setInterval(()=>{
//  const container = document.getElementById('asd') as HTMLElement;
//  container.innerHTML = new Date().toISOString();
//})
root.render(
        <Records />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


    {/* <PanelOutput id={1} description={"asd"} title={"asdasd"}/> */}
    {/* <PanelOutput betterText={(
    <>
    <h1>Szia</h1>
    </>)}/> */}

    {/* <PanelOutput>
        <h1>Rasd</h1>
        <p>nagyon jó</p>
    </PanelOutput>

    <PanelOutput /> */}

    {/* <Accordion title="asd" description="asd" />
     */}
