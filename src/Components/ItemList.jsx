import { useEffect, useState } from "react";
import Item from "./Item";

function NavPage(pagina){
    return(
        <header className="d-flex justify-content-between aling-items-center ">
            <p>Page: {pagina.page}</p>
            <button className="btn btn-primary btn-sm" onClick={() => pagina.setPage(pagina.page + 1) }>Page {pagina.page + 1}</button>
        </header>
    )
    
}

function ItemList() {
    const[characters, setCharacters] = useState([])
    const[loading, setLoading] = useState(true)
    const[page, setPage] = useState(1)

    useEffect(()=>{
      async function fetchData(){
        const response = await fetch("https://rickandmortyapi.com/api/character?page=" + page);
        const data = await response.json()
        setLoading(false)
        setCharacters(data.results)
      }
      fetchData(); 
    },[page])
  
  return (
    <div className="container">  

    <NavPage page={page} setPage={setPage}/>

    {loading ? (<h1>Loading...</h1>):
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
    <NavPage page={page} setPage={setPage}/>
    </div>
    
  )
}

export default ItemList