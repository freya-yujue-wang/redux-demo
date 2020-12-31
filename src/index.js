import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import store from './redux/store'
import { Provider } from "react-redux";

ReactDOM.render(
    //此处用provier包App，让App所有的后代容器组件都能接受到store
    <Provider store={store}>
    <App/> 
    </Provider>,
    document.getElementById('root'));
