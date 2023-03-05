import React, { useRef } from "react";
import ReactDOM from "react-dom/client"
import {App} from "./HelloWorldApp";
import {FirstApp} from "./FirstApp";
import { CounterApp } from "./CounterApp";

import { CustomNav } from "./CustomNav";
import { NavItem } from "./interfaces/interfaces";

import './styles.css';

const items:NavItem[] = [
    {
        name: "Contacto",
        key: "contact"
    },
    {
        name: "Servicios",
        key: 'services'
    }
]



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <App></App> */}
        {/* <FirstApp title="Hola, Soy Vegeta"/> */}
        <CounterApp value={ 10 }></CounterApp>
        {/* <CustomNav packageItems={items}></CustomNav> */}
       
    </React.StrictMode>
);