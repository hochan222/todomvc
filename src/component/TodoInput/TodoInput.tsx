import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoStore } from '../../types/models/index';

function TodoInput({ store }: { store: ITodoStore }): React.ReactElement {
  const [content, setContent] = useState('');
  const { addContent } = store;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      addContent(content);
      setContent('');
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
