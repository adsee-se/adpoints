import { TasksState } from "./type"

export const INPUT_TEXT = "INPUT_TEXT";
export const inputTextAction = (tasksState: TasksState) => {
  return {
    type: INPUT_TEXT,
    payload: {
      tasks: tasksState.tasks
    }
  };
};