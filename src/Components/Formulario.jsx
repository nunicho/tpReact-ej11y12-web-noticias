import React from 'react';
import '../index.css'
import {useState} from 'react'
import { FormSelect } from 'react-bootstrap';


function Formulario({active, setActive, setCountry, setCategory}) {


const options = [

    {value: "..", text: 'ELIGE UN PAIS'},
    {value: "ar", text: 'ARGENTINA'},
    {value: "us", text: 'ESTADOS UNIDOS'},
    {value: "mx", text: 'MÉXICO'},
    {value: "br", text: 'BRASIL'},
]

const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
    setCountry(event.target.value)
  };



const links = [
    {id: 1, name: "General", value: "general"},
    {id: 2, name: "Negocios", value: "business"},
    {id: 3, name: "Entretenimiento", value: "entertainment"},
    {id: 4, name: "Salud", value: "health"},
    {id: 5, name: "Ciencia", value: "science"},
    {id: 6, name: "Deportes", value: "sports"},
    {id: 7, name: "Tecnología", value: "technology"},
]



function onClick(id, value){
    setActive(id)
    console.log(value)  
    setCategory(value)
}


    return (
        <div>
            <div>
                <FormSelect value={selected} onChange={handleChange}>
                {options.map(option => (
                
                 <option className ="text-center w-25" key={option.value} value={option.value}>
                 {option.text}
                  </option>
                
                 ))}
                </FormSelect>
             </div>    
               
          
         <nav className="menu">
                <ul>
                    {links.map(link =>(
                    <li
                    key={link.id}
                    className={active === link.id ? "active": "inactive"}
                    onClick={()=> onClick(link.id, link.value)}>
                    {link.name}
                    </li>
                    ))}
                </ul>
        </nav>
        </div>
    );
}

export default Formulario;