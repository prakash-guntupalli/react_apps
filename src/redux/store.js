import { createStore } from "redux";
import  ListReducer from './reducer';

export const store = createStore(ListReducer);