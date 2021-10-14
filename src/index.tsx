import React from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './component/TodoApp';

import 'todomvc-common/base.css';
import 'todomvc-app-css/index.css';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root'),
);
