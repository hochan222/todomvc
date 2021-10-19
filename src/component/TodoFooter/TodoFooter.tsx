import React from 'react';
import { observer } from 'mobx-react-lite';
import { IRootStore } from '../../types/models/index';

const makeTodoCountTag = (count: number): React.ReactElement => {
  const tagDescription = count > 1 ? ' items left' : ' item left';

  return (
    <>
      <strong>{count}</strong>
      {tagDescription}
    </>
  );
};

const TodoFooter = ({ store: rootStore }: { store: IRootStore }): React.ReactElement => {
  const { getLeftItems, removeCompletedContent } = rootStore.todoStore;
  const leftItems = makeTodoCountTag(getLeftItems());

  return (
    <footer className="footer">
      <span className="todo-count">{leftItems}</span>
      <ul className="filters">
        <li>
          <a href="/" className={'all'}>
            All
          </a>
        </li>{' '}
        <li>
          <a href="/active" className={'active'}>
            Active
          </a>
        </li>{' '}
        <li>
          <a href="/completed" className={'completed'}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={removeCompletedContent}>
        Clear completed
      </button>
    </footer>
  );
};

export default observer(TodoFooter);
