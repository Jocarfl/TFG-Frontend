import * as React from 'react';
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Comida} from "../BaseDatosComida/ComidaBD";
import SearchBar from '../components/SearchBarComida';
import TablaComida from "../components/TablaComida";
import './css/Nutricion.css'
import { Input } from '@mui/material';




export function Nutricion() {

    const [query, setQuery] = useState("");

    const Search = (data) => {
        return data.filter( (item)=> item.nombre.toLowerCase().includes(query));
    };
    return (
        <div className="app">
            <input
                className="search"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}/> {<TablaComida data={Search(Comida)}/>}
        </div>
    );
}