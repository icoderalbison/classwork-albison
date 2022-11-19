import React from 'react'

const Mapdata = (props) => {
  return (
    <>
        <ul>
            {
                props.data.map((dat) =>(
                    <li>
                        <h1>{dat.title}</h1>
                        <img src={dat.img} />
                    </li>
                ))
            }
        </ul>
    </>
  )
}

export default Mapdata