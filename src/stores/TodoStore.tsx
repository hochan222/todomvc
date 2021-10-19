import { action, makeObservable, observable } from 'mobx';
import { ITodoContext } from '../types/models';
import { IRootStore } from '../types/models/index';

class TodoStore {
  rootStore: IRootStore;
  todoList: ITodoContext[];
  increaseId = 0;

  constructor(rootStore: IRootStore) {
    this.todoList = this.getLocalStorage();
    makeObservable(this, {
      todoList: observable,
      addContent: action,
      toggleCheck: action,
      removeContent: action,
    });
    this.rootStore = rootStore;
  }

  getLocalStorage = (): ITodoContext[] => {
    return JSON.parse(localStorage.getItem('todoList') as string) || [];
  };

  setLocalStorage = (todoList: ITodoContext[]): void => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  addContent = (content: string): void => {
    this.todoList.push({ id: this.increaseId, content: content, checked: false });
    this.increaseId += 1;
    this.setLocalStorage(this.todoList);
  };

  toggleCheck = (id: number): void => {
    const targetId = this.todoList.findIndex((v) => v.id === id);
    if (this.checkId(targetId)) {
      this.todoList[targetId].checked = !this.todoList[targetId].checked;
    }
    this.setLocalStorage(this.todoList);
  };

  removeContent = (id: number): void => {
    const targetId = this.findIndex(id);
    if (this.checkId(targetId)) {
      this.removeTodoItem(targetId);
    }
    this.setLocalStorage(this.todoList);
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
