import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import ListaNoticias from './Components/ListaNoticias'
import Titulo from './Components/Titulo';
import './index.css'
;

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] =useState("general")
  const [country, setCountry] =useState("ar")

useEffect(() =>{
fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=0d185c712a894878810d8008dd05e388`)
.then(res => res.json())
.then(data => setItems(data.articles))
}, [country, category])

return (
    <div className="App">
    <Titulo></Titulo>
    <Formulario active={active} setActive={setActive} setCountry={setCountry} setCategory={setCategory}/>
    <ListaNoticias items={items}/>
    </div>
  );
}

export default App;
