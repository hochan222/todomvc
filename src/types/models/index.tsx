import React from 'react';

export interface ITodoContext {
  id: number;
  content: string;
  checked: boolean;
}

export interface ITodoItem extends ITodoContext {
  onClickHandler: (e: React.MouseEvent, id: number) => void;
}

export interface ITodoStore {
  todoList: ITodoContext[];
  increaseId: number;

  addContent: (content: string) => void;
  removeContent: (id: number) => void;
  toggleCheck: (id: number) => void;
}
