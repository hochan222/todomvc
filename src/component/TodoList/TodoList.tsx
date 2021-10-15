import React from 'react';
import { observer } from 'mobx-react-lite';

import TodoItem from '../TodoItem';
import { IRootStore } from '../../types/models/index';

function TodoList({ store: rootStore }: { store: IRootStore }): React.ReactElement {
  const { todoList, toggleCheck, removeContent } = rootStore.todoStore;

  const onClickHandler = (e: React.MouseEvent, id: number) => {
    const currentTarget = e.target as HTMLElement;

    if (currentTarget.classList.contains('toggle')) {
      toggleCheck(id);
    }
    if (currentTarget.classList.contains('destroy')) {
      removeContent(id);
    }
    console.log(currentTarget?.classList);
  };

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {todoList.map(({ id, content, checked }) => {
          return <TodoItem key={id} id={id} content={content} checked={checked} onClickHandler={onClickHandler} />;
        })}
      </ul>
    </section>
  );
}

export default observer(TodoList);
