import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoItem } from '../../types/models/index';
import classNames from 'classnames';

function TodoItem({ id, content, checked, onClickHandler, editContent }: ITodoItem): React.ReactElement {
  const [checkEditStatus, setEditStatus] = useState(false);
  const [itemContent, setItemContent] = useState(content);

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

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e?.code === 'Enter') {
      setEditStatus((prev) => !prev);
      editContent(id, itemContent);
    }
  };

  const makeItemElement = (checkEditStatus: boolean) => {
    return checkEditStatus ? (
      <input
        className={classNames({ edit: checkEditStatus })}
        type="text"
        autoFocus={true}
        value={itemContent}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        onKeyDown={onKeyDownHandler}
      />
    ) : (
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} readOnly />
        <label onDoubleClick={onDoubleClickHandler}>{content}</label>
        <button className="destroy" />
      </div>
    );
  };

  const itemElement = makeItemElement(checkEditStatus);

  return (
    <li
      className={classNames({ completed: checked }, { editing: checkEditStatus })}
      onClick={(e) => onClickHandler(e, id)}
    >
      {itemElement}
    </li>
  );
}

export default observer(TodoItem);
