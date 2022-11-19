import React, { Component } from 'react'
import "./state.scss"
class State extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 1
        })
    }

 
    

    render() {
        return (
            <>
                <div>{this.state.count}</div>
                <button onClick={this.increment}>See result</button>
            </>
        )
    }
}


export default State