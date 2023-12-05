export interface TasksState {
  tasks: string[];
}
export interface ActionType {
  type: string;
  payload: object;
}
export interface Type {
  type: 'INPUT_TEXT';
}

export interface TasksObjState {
  tasks:{
    tasks: string[];
  }
}
