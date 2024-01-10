import * as Actions from './actions';
import initialState from "../store/initialState";
import { ActionType } from "./type";

export const TasksReducer = (state = initialState.tasks, action: ActionType) => {
  switch(action.type){
    case Actions.INPUT_TEXT:
      return{
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}