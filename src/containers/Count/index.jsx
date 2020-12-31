import React, { Component } from 'react';
import {increment, decrement,incrementAsync} from '../../redux/actions/count';
import {connect} from 'react-redux';


class Count extends Component {
    
    increment = () => {
        const {value} = this.selectNumber
        this.props.increment(value*1)
    } 
    decrement = () => {
        const {value} = this.selectNumber
        this.props.decrement(value*1)
    }
    incrementIfOdd = () => {
        const {value} = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.increment(value*1)
        }
        
    }
    incrementAsync = () => {
        const {value} = this.selectNumber 
        this.props.incrementAsync(value*1, 500)
    }

    render() {
        return (
            <div>
                <h2>我是Count组件</h2>
                <h4>current sum is: {this.props.count}, 总人数为：{this.props.personCount}</h4>
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




//这是一个容器组件
export default connect(
    state => ({
        count: state.count, 
        personCount: state.persons.length
    }), //map状态
    {
        increment,
        decrement,
        incrementAsync
    }
)(Count)
