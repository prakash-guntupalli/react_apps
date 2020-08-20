import { createStore } from "redux";
// import rootReducer from "./reducers";


const ADD = 'ADD';
const COMPLETED = 'COMPLETED';

const initState = 
    [{id:99998, name: 'Todo99998'},{id:99999, name:'Todo99999'}]

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

export const toggleStatus = (id) => {
    return {
        type : COMPLETED,
        payload : {
            id
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

        case COMPLETED : {
            let { id } = action.payload;
            let newState = state.filter( i => {
                return i.id !== id;
            })
            return newState;
        }

        default :
            return state;
    }
}


export const store = createStore(listReducer);