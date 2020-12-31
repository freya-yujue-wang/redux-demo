import CountUI from '../../components/Count'
import {connect} from 'react-redux'
import {createIncrementAction, createDecrementAction,createIncrementAsyncAction} from '../../redux/count_action.js'


//a函数的返回值作为状态传给了UI组件
function mapStateToProps(state) {
    return {count: state}
}
//操作的方法
function mapDispatchToProps(dispatch) {
    return {
        jia:number => dispatch(createIncrementAction(number)),
        jian:number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number, time)),
    }
}
//这是一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)
