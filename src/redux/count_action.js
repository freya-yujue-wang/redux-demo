import {INCREMENT, DECREMENT} from './constant'
import store from './store'

//同步action，action的值是object的一般对象
export const createIncrementAction = (data) => ({type:INCREMENT, data })

export const createDecrementAction = (data) => {
    return {type:DECREMENT, data}
}

//异步action，action的值为函数
export const createIncrementAsyncAction = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(createIncrementAction(data))
        }, time)
    }
}