import { action, makeObservable, observable } from 'mobx';
import { ITodoContext } from '../types/models';

class TodoStore {
  todoList: ITodoContext[] = [];
  increaseId = 0;

  constructor() {
    makeObservable(this, {
      todoList: observable,
      addContent: action,
      toggleCheck: action,
      removeContent: action,
    });
  }

  addContent = (content: string): void => {
    this.todoList.push({ id: this.increaseId, content: content, checked: false });
    this.increaseId += 1;
  };

  toggleCheck = (id: number): void => {
    const targetId = this.todoList.findIndex((v) => v.id === id);
    if (this.checkId(targetId)) {
      this.todoList[targetId].checked = !this.todoList[targetId].checked;
    }
  };

  removeContent = (id: number): void => {
    const targetId = this.findIndex(id);
    if (this.checkId(targetId)) {
      this.removeTodoItem(targetId);
    }
  };

  findIndex = (id: number): number => {
    return this.todoList.findIndex((item) => item.id === id);
  };

  checkId = (targetId: number): boolean => {
    return targetId !== -1;
  };

  removeTodoItem = (targetId: number): void => {
    this.todoList.splice(targetId, 1);
  };
}

export default TodoStore;
