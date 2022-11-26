import React from 'react'


let isLoading = false

const Conditional = () => {
 
    if(isLoading){
        return <h1>Loading..</h1>
    }else{
        return <div>Conditional</div>
    }

}

export default Conditional