import { useEffect, useState } from "react";
import Item from "./Item";

function NavPage(){
    return(
        <header className="d-flex justify-content-between aling-items-center ">
            <p>Page 1</p>
            <button className="btn btn-primary btn-sm" onClick={() => console.log()}>Page 2</button>
        </header>
    )
    
}

function ItemList() {
    const[characters, setCharacters] = useState([])
    const[Loading, setLoading] = useState(true)
    useEffect(()=>{
      async function fetchData(){
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json()
        setLoading(false)
        setCharacters(data.results)
      }
      fetchData(); 
    },[])
  
  return (
    <div className="container">  

    <NavPage/>

    {Loading ? (<h1>Loading...</h1>):
    (<div className="row"> 
        {characters.map(item => {
          return(
            <div className="col-md-4" key={item.id}>
                <Item item = {item} />
            </div>
          )
        })}
        </div> 

    )}
    </div>
  )
}

export default ItemList