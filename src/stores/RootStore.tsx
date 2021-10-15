import { ITodoStore } from '../types/models/index';
import TodoStore from './TodoStore';

class RootStore {
  todoStore: ITodoStore;

  constructor() {
    this.todoStore = new TodoStore(this);
  }
}

export default RootStore;
