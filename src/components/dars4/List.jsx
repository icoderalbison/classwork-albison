import React, { useEffect, useState } from 'react'

const List = ({getitem}) => {
    const [items, setItems]  = useState([])

    useEffect(() =>{
        setItems(getitem())
        console.log("render boldi")
    }, [getitem])
    

  return (
    <>
    {items.map((item, index) =>{
        return <h3 key={index}>{item}</h3>
    })}
    </>
  )
}

export default List