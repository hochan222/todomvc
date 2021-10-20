import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoItem } from '../../types/models/index';
import classNames from 'classnames';

function TodoItem({ id, content, checked, onClickHandler, editContent }: ITodoItem): React.ReactElement {
  const [editStatus, setEditStatus] = useState(false);
  const [itemContent, setItemContent] = useState(content);
  let itemElement;

  const onDoubleClickHandler = () => {
    setEditStatus((prev) => !prev);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemContent(e.target?.value);
  };

  const onBlurHandler = () => {
    setEditStatus((prev) => !prev);
    editContent(id, itemContent);
  };

  if (editStatus) {
    itemElement = (
      <input
        className={classNames({ edit: editStatus })}
        type="text"
        autoFocus={true}
        value={itemContent}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
    );
  } else {
    itemElement = (
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} />
        <label onDoubleClick={onDoubleClickHandler}>{content}</label>
        <button className="destroy" />
      </div>
    );
  }

  return (
    <li className={classNames({ completed: checked }, { editing: editStatus })} onClick={(e) => onClickHandler(e, id)}>
      {itemElement}
    </li>
  );
}

export default observer(TodoItem);
