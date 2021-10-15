import React from 'react';

function TodoFooter(): React.ReactElement {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>0</strong> item left
      </span>
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
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default TodoFooter;
