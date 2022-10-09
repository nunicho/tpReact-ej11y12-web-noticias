import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import Formulario from './Components/Formulario'
import ListaNoticias from './Components/ListaNoticias'
import './index.css'
;

function App() {
  const [items, setItems] = useState([])
  const [active, setActive] = useState(1)
  const [category, setCategory] =useState("general")

useEffect(() =>{
fetch(`https://newsdata.io/api/1/news?apikey=pub_12086b0faa89ff9d9a6ebe9648066bdfb81eb&q=pegasus&language=en`)
.then(res => res.json())
.then(data => setItems(data.articles))
}, [category])

return (
    <div className="App">
    <h1 className="title">See The Latest News</h1>
    <Formulario active={active} setActive={setActive} setCategory={setCategory}/>
    <ListaNoticias items={items}/>
    </div>
  );
}

export default App;
