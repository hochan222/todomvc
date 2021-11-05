import React from 'react';

export interface ITodoContext {
  id: number;
  content: string;
  checked: boolean;
}

export interface ITodoList {
  todoList: ITodoContext[];
  onClickHandler: (e: React.MouseEvent, id: number) => void;
  editContent: (id: number, content: string) => void;
}

export interface ITodoItem extends ITodoContext {
  onClickHandler: (e: React.MouseEvent, id: number) => void;
  editContent: (id: number, content: string) => void;
}

export interface IRootStore {
  todoStore: ITodoStore;
}

export interface ITodoStore {
  todoList: ITodoContext[];
  increaseId: number;

  addContent: (content: string) => void;
  editContent: (id: number, content: string) => void;
  removeContent: (id: number) => void;
  removeCompletedContent: () => void;
  toggleCheck: (id: number) => void;
  toggleAllCheck: (check: boolean, todoList: ITodoContext[]) => void;
  getLeftItemsLength: () => number;
}

export interface ILocalStorage {
  todoList: ITodoContext[];
  increaseId: number;
}
