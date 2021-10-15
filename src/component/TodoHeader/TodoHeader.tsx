import React from 'react';
import { observer } from 'mobx-react-lite';

function TodoHeader(): React.ReactElement {
  return (
    <header className="header">
      <h1>todos</h1>
    </header>
  );
}

export default observer(TodoHeader);
