import React from 'react';
import '../index.css'

function Formulario({active, setActive, setCategory}) {

const links = [
    {id: 1, name: "business", value: "business"},
    {id: 2, name: "entertainment", value: "entertainment"},
    {id: 3, name: "environment", value: "environment"},
    {id: 4, name: "food", value: "food"},
    {id: 5, name: "health", value: "health"},
    {id: 6, name: "politics", value: "politics"},
    {id: 7, name: "science", value: "science"},
    {id: 8, name: "sports", value: "sports"},
    {id: 9, name: "technology", value: "technology"},
    {id: 10, name: "top", value: "top"},
    {id: 11, name: "world", value: "world"},
]

function onClick(id, value){
    setActive(id)
    setCategory(value)
}

    return (
        
         <nav className="menu">
            <ul>
            {links.map(link =>(
            <li
            key={link.id}
            className={active === link.id ? "active": "inactive"}
            onClick={()=> onClick(link.id, link.value)}
            >
                {link.name}
            </li>
            ))}
            </ul>
        </nav>
    );
}

export default Formulario;