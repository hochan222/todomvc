import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { IRootStore } from '../types/models';

function TodoInput({ store: rootStore }: { store: IRootStore }): React.ReactElement {
  const [content, setContent] = useState('');
  const { addContent } = rootStore.todoStore;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addContent(content);
    }
  };

  return (
    <input
      className="new-todo"
      type="text"
      value={content}
      onChange={onChangeHandler}
      onKeyDown={onKeyDownHandler}
      placeholder="What needs to be done?"
    />
  );
}

export default observer(TodoInput);
