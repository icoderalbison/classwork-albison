import React, { useCallback, useMemo, useState } from 'react'
import List from './List'

const Usememocallback = () => {
    // const hardfunction = function(num){
    //     for(let i =0; i < 1000000000; i++){}
    //     return num + 2
    // }
    const [status, setStatus] = useState("offline")
    const [number, setNumber] = useState(0)
    // const result = useMemo(() =>{
    //     return hardfunction(number)
    // }, [number])


    const getItem = useCallback(() =>{
        return [number, number + 1, number + 2]
    }, [number])



  return (
    <>
        <input type={"number"} value={number} onChange={(e) =>{
            setNumber(Number(e.target.value))
        }}/>
        {/* <div></div> */}

        <button
        onClick={() =>{
            status == "offline" ? setStatus("online") : setStatus("offline")
        }}
        >{status}</button>


        <List getitem={getItem}/>
    </>
  )
}

export default Usememocallback