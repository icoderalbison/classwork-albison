import React from 'react'
import "./state.scss"
const Mapdata = (props) => {
    let data = props.data
    
  return (
    <>
        <ul>
            {
                data.map((dat) =>(
                    <li>{dat.title}</li>
                ))
            }  
        </ul>
    </>
  )
}

export default Mapdata