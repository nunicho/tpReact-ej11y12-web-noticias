import React from 'react';
import '../index.css'

function Formulario({active, setActive, setCountry, setCategory}) {

const linksCountry = [
    {id: 10, name: "Argentina", value: "ar"},
    {id: 11, name: "Estados Unidos", value: "us"},
    {id: 12, name: "México", value: "mx"},
    {id: 13, name: "Brazil", value: "br"},

]

function onClickCountry(id, value){
    setActive(id)
    setCountry(value)
}

const links = [
    {id: 1, name: "General", value: "general"},
    {id: 2, name: "Business", value: "business"},
    {id: 3, name: "Entertainment", value: "entertainment"},
    {id: 4, name: "Health", value: "health"},
    {id: 5, name: "Science", value: "science"},
    {id: 6, name: "Sports", value: "sports"},
    {id: 7, name: "Technology", value: "technology"},
]

function onClick(id, value){
    setActive(id)
    setCategory(value)
}


    return (
        <div>
            <nav className="menu">
            <ul>
            {linksCountry.map(link =>(
            <li
            key={link.id}
            className={active === link.id ? "active": "inactive"}
            onClick={()=> onClickCountry(link.id, link.value)}
            >
                {link.name}
            </li>
            ))}
            </ul>
        </nav>
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
        </div>
    );
}

export default Formulario;