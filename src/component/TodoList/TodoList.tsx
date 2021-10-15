import React from 'react';
import { observer } from 'mobx-react-lite';

import TodoItem from '../TodoItem';
import { ITodoStore } from '../../types/models/index';

function TodoList({ store }: { store: ITodoStore }): React.ReactElement {
  const { todoList } = store;

  const onClickHandler = (e: React.MouseEvent) => {
    console.log(e);
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
