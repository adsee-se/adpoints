import{
  createStore as reduxCreateStore,
  combineReducers,
} from 'redux';
// import { UsersReducer }from '../users/reducers'
import { TasksReducer } from '../tasks/reducers';

export default function createStore () {
  return reduxCreateStore(
    combineReducers({
      // users: UsersReducer,
      tasks: TasksReducer,
    })
  );
}