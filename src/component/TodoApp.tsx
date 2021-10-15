import React, { useContext } from 'react';
import classNames from 'classnames';

import StoreContext from '../contexts/stores';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoHeader from './TodoHeader';
import TodoInput from './TodoInput';
import { IRootStore } from '../types/models/index';

function TodoApp(): React.ReactElement {
  const rootStore: IRootStore = useContext(StoreContext) as IRootStore;

  return (
    <section>
      <TodoHeader />
      <TodoInput store={rootStore} />
      <TodoList />
      <TodoFooter />
    </section>
  );
}

export default TodoApp;
