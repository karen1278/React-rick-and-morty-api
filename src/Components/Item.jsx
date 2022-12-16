import React from "react"

function Item({ item }) {
  return (
    <div className="text-center p-5 ">
    <h3>{item.name}</h3>
    <img className="img-fluid rounded-pill " src={item.image}></img>
    <p className="">{item.origin.name}</p>
  </div>
  )
}

export default Item