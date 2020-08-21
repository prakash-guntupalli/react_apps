import { createStore } from "redux";
// import rootReducer from "./reducers";


const ADD = 'ADD';
const TOGGLE = 'TOGGLE';

const initState = [];

let tempId = 0;

export const addTask = (task) => {
    return {
        type : ADD,
        payload : {
            task,
            id: ++tempId
        }
    }
}

export const toggleStatus = (id, status) => {
    return {
        type : TOGGLE,
        payload : {
            id,
            status
        }
    }
}

const listReducer = (state = initState, action) => {
    switch(action.type){
        case ADD : {
            let { task, id } = action.payload;
            return [
                ...state, 
                {
                    id: id,
                    name : task,
                    completed : false
                }
            ]
        }

        case TOGGLE : {
            let { id, status } = action.payload;
            let currentTask = state.filter( i => i.id === id);
            currentTask[0].completed = status;
            let newState = state.filter( i => {
                return i.id !== id;
            })
            return [...newState, currentTask[0]];
        }

        default :
            return state;
    }
}


export const store = createStore(listReducer);