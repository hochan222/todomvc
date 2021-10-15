import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
// import classNames from 'classnames';

import StoreContext from '../../contexts/stores';
import TodoFooter from '../TodoFooter';
import TodoList from '../TodoList';
import TodoHeader from '../TodoHeader';
import TodoInput from '../TodoInput';
import { ITodoStore } from '../../types/models/index';

function TodoApp(): React.ReactElement {
  const todoStore: ITodoStore = useContext(StoreContext) as ITodoStore;

  return (
    <section>
      <TodoHeader />
      <TodoInput store={todoStore} />
      <TodoList store={todoStore} />
      <TodoFooter />
    </section>
  );
}

export default observer(TodoApp);
