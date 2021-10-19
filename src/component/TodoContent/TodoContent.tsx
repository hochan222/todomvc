import React from 'react';
import { observer } from 'mobx-react-lite';

import { IRootStore, ITodoContext } from '../../types/models/index';
import TodoList from '../TodoList';

const todoListFilter = (todoList: ITodoContext[]): ITodoContext[] => {
  const pathname = window.location.pathname;
  const selectedTodolist = todoList;

  switch (pathname) {
    case '/':
      return selectedTodolist;
    case '/active':
      return selectedTodolist.filter((item) => item.checked === false);
    case '/completed':
      return selectedTodolist.filter((item) => item.checked === true);
  }
  return selectedTodolist;
};

const TodoContent = ({ store: rootStore }: { store: IRootStore }): React.ReactElement => {
  const { todoList, toggleCheck, removeContent, toggleAllComplete } = rootStore.todoStore;
  const selectedTodolist = todoListFilter(todoList);

  const onClickHandler = (e: React.MouseEvent, id: number) => {
    const currentTarget = e.target as HTMLElement;

    if (currentTarget.classList.contains('toggle')) {
      toggleCheck(id);
    }
    if (currentTarget.classList.contains('destroy')) {
      removeContent(id);
    }
  };

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" onClick={toggleAllComplete} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList todoList={selectedTodolist} onClickHandler={onClickHandler} />
    </section>
  );
};

export default observer(TodoContent);
