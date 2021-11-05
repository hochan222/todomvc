import React from 'react';
import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
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
  const { getLeftItemsLength, removeCompletedContent } = rootStore.todoStore;
  const leftItems = makeTodoCountTag(getLeftItemsLength());

  return (
    <footer className="footer">
      <span className="todo-count">{leftItems}</span>
      <ul className="filters">
        <li>
          <NavLink exact to="/" activeClassName="all">
            All
          </NavLink>
          {/* <a href="/" className={'all'}>
            All
          </a> */}
        </li>{' '}
        <li>
          <NavLink exact to="/active" activeClassName="active">
            Active
          </NavLink>
          {/* <a href="/active" className={'active'}>
            Active
          </a> */}
        </li>{' '}
        <li>
          <NavLink exact to="/completed" activeClassName="completed">
            Completed
          </NavLink>
          {/* <a href="/completed" className={'completed'}>
            Completed
          </a> */}
        </li>
      </ul>
      <button className="clear-completed" onClick={removeCompletedContent}>
        Clear completed
      </button>
    </footer>
  );
};

export default observer(TodoFooter);
