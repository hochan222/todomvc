import React from 'react';
import classNames from 'classnames';

function App() {
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked={true} />
              <label>{'todo title'}</label>
              <button className="destroy" />
            </div>
          </li>
        </ul>
      </section>

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
    </div>
  );
}

export default App;
