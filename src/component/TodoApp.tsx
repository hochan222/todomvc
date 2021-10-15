import React from 'react';
import classNames from 'classnames';

import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

function TodoApp() {
  return (
    <div>
      <TodoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
}

export default TodoApp;
