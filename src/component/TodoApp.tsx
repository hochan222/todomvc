import React from 'react';
import classNames from 'classnames';

import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';

function TodoApp(): React.ReactElement {
  return (
    <section>
      <TodoHeader />
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </section>
  );
}

export default TodoApp;
