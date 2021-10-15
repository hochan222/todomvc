import React from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoItem } from '../../types/models/index';

function TodoItem({ id, content, checked, onClickHandler }: ITodoItem): React.ReactElement {
  return (
    <li className={checked ? 'completed' : ''} onClick={(e) => onClickHandler(e, id)}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={checked} />
        <label>{content}</label>
        <button className="destroy" />
      </div>
    </li>
  );
}

export default observer(TodoItem);
