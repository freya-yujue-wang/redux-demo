import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {createAddPersponAction} from '../../redux/actions/person'

class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = {id:nanoid(), name, age}
        this.props.jiayiren(personObj)
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    render() { 
        return (
            <div>
                <h2>我是Person组件, 求和为{this.props.he}</h2>
                <input ref={c => this.nameNode = c} type ="text" palaceholder="输入名字"/> &nbsp;&nbsp;
                <input ref={c => this.ageNode = c} type ="text" palaceholder="输入年龄"/> &nbsp;&nbsp;
                <button onClick={this.addPerson}>添加</button>
                <ul>
                        
                        {
                            this.props.yiduiren.map((p) => {
                                return <li key={p.id}>{p.name}---{p.age}</li>
                            })
                            
                        }
                </ul>
                    
            </div>
        )
    }
}

export default connect(
    state => ({yiduiren: state.rens, he: state.he}), //map状态

    //mapDispacthToProps的简写
    {
        jiayiren: createAddPersponAction,
    }
)(Person)