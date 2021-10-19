import React from 'react';
import { observer } from 'mobx-react-lite';

import TodoItem from '../TodoItem';
import { IRootStore, ITodoContext } from '../../types/models/index';

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

const TodoList = ({ store: rootStore }: { store: IRootStore }): React.ReactElement => {
  const { todoList, toggleCheck, removeContent } = rootStore.todoStore;
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
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {selectedTodolist.map(({ id, content, checked }) => {
          return <TodoItem key={id} id={id} content={content} checked={checked} onClickHandler={onClickHandler} />;
        })}
      </ul>
    </section>
  );
};

export default observer(TodoList);
