import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';




const feeling = (state = 0, action) =>{
    if(action.type === 'SET_FEELING'){
        return action.payload;
    }else if (action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
}

const understanding = (state = 0, action) =>{
    if(action.type === 'SET_UNDERSTANDING'){
        return action.payload;
    }else if(action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
}

const supported = (state = 0, action) =>{
    if(action.type === 'SET_SUPPORTED'){
        return action.payload;
    }else if (action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
}

const comments = (state = '', action) => {
    if(action.type === 'SET_COMMENTS'){
        return action.payload;
    }else if (action.type === 'CLEAR_ALL'){
        return '';
    }
    return state;
}







const storeInstance = createStore(
    combineReducers(
        {
            feeling,
            understanding,
            supported,
            comments,
        }
    )
)



ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
