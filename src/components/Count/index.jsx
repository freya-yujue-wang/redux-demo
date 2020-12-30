import React, { Component } from 'react'
import store from '../../redux/store'
export default class Count extends Component {
    //state = {count: 0}

    /*componentDidMount() {
        store.subscribe(() => {
            this.setState({})
        })
    }*/
    

    increment = () => {
        const {value} = this.selectNumber
        store.dispatch({type:'increment', data: value * 1})
    } 
    decrement = () => {
        const {value} = this.selectNumber
        store.dispatch({type:'decrement', data: value * 1})

    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        const count = this.state
        if (count % 2 !== 0) {
            store.dispatch({type:'increment', data: value * 1})
        }
        
    }
    incrementAsync = () => {
        const {value} = this.selectNumber
        setTimeout(() => {
            store.dispatch({type:'increment', data: value * 1})
        }, 500)
        
    }
    render() {
        return (
            <div>
                <h1>current sum is: {store.getState()}</h1>
                <select ref= {c => this.selectNumber = c}>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                </select>
                &nbsp;&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;&nbsp;
                <button onClick={this.incrementIfOdd}>add when odd</button>&nbsp;&nbsp;
                <button onClick={this.incrementAsync}>add asyn</button>&nbsp;&nbsp;
                
            </div>
        )
    }
}
