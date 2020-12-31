import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value*1
        const personObj = {id:nanoid(), name, age}
        this.props.addPerson(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() { 
        return (
            <div>
                <h2>我是Person组件, 求和为{this.props.count}</h2>
                <input ref={c => this.nameNode = c} type ="text" palaceholder="输入名字"/> &nbsp;&nbsp;
                <input ref={c => this.ageNode = c} type ="text" palaceholder="输入年龄"/> &nbsp;&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                        
                        {
                            this.props.persons.map((p) => {
                                return <li key={p.id}>{p.name}---{p.age}</li>
                            })
                            
                        }
                </ul>
                    
            </div>
        )
    }
}

export default connect(
    state => ({
        count: state.count,
        persons: state.persons
        }), //map状态
    {
        addPerson
    }
)(Person)
