import React from 'react';
import { observer } from 'mobx-react-lite';

import TodoItem from '../TodoItem';
import { ITodoList } from '../../types/models/index';

const TodoList = ({ todoList, onClickHandler }: ITodoList): React.ReactElement => {
  return (
    <>
      <ul className="todo-list">
        {todoList.map(({ id, content, checked }) => {
          return <TodoItem key={id} id={id} content={content} checked={checked} onClickHandler={onClickHandler} />;
        })}
      </ul>
    </>
  );
};

export default observer(TodoList);
