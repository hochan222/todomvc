import { action, makeObservable, observable } from 'mobx';
import { ITodoContext } from '../types/models';
import { IRootStore, ILocalStorage } from '../types/models/index';

class TodoStore {
  rootStore: IRootStore;
  todoList: ITodoContext[];
  increaseId: number;

  constructor(rootStore: IRootStore) {
    const { todoList, increaseId } = this.getLocalStorage() || {};
    this.todoList = todoList || [];
    this.increaseId = increaseId || 0;
    makeObservable(this, {
      todoList: observable,
      addContent: action,
      editContent: action,
      toggleCheck: action,
      toggleAllCheck: action,
      removeContent: action,
      removeCompletedContent: action,
    });
    this.rootStore = rootStore;
  }

  private getLocalStorage = (): ILocalStorage => {
    return JSON.parse(localStorage.getItem('todoList') as string);
  };

  private setLocalStorage = (): void => {
    localStorage.setItem('todoList', JSON.stringify({ todoList: this.todoList, increaseId: this.increaseId }));
  };

  getLeftItemsLength = (): number => {
    return this.todoList.filter((item) => item.checked === false).length;
  };

  addContent = (content: string): void => {
    this.todoList.push({ id: this.increaseId, content: content, checked: false });
    this.increaseId += 1;
    this.setLocalStorage();
  };

  editContent = (id: number, content: string): void => {
    const targetId = this.findIndex(id);
    this.todoList[targetId] = { ...this.todoList[targetId], content: content };
    this.setLocalStorage();
  };

  toggleCheck = (id: number): void => {
    const targetId = this.todoList.findIndex((v) => v.id === id);
    if (this.checkId(targetId)) {
      this.todoList[targetId].checked = !this.todoList[targetId].checked;
    }
    this.setLocalStorage();
  };

  toggleAllCheck = (check: boolean, todoList: ITodoContext[]): void => {
    this.todoList = this.todoList.map((item) => {
      if (todoList.map((item) => item.id).includes(item.id)) {
        return { ...item, checked: !check };
      }
      return item;
    });
    this.setLocalStorage();
  };

  removeContent = (id: number): void => {
    const targetId = this.findIndex(id);
    if (this.checkId(targetId)) {
      this.removeTodoItem(targetId);
    }
    this.setLocalStorage();
  };

  removeCompletedContent = (): void => {
    this.todoList = this.todoList.filter((item) => item.checked === false);
    this.setLocalStorage();
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
