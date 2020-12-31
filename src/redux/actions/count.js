import {INCREMENT, DECREMENT} from '../constant'

//同步action，action的值是object的一般对象
export const increment = data => ({type:INCREMENT, data })

export const decrement = data => ({type:DECREMENT, data}) 


//异步action，action的值为函数
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time)
    }
}