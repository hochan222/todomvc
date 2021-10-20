import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { ITodoContext } from '../../types/models/index';

const TodoToggleAllButton = ({
  toggleAllCheck,
  selectedTodolist,
}: {
  toggleAllCheck: (check: boolean, todoList: ITodoContext[]) => void;
  selectedTodolist: ITodoContext[];
}): React.ReactElement => {
  const [checkToggleAll, setCheckToggleAll] = useState<boolean>(false);
  const toggleAllHandler = () => {
    setCheckToggleAll((prev) => !prev);
    toggleAllCheck(checkToggleAll, selectedTodolist);
  };

  return (
    <>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        checked={checkToggleAll}
        onChange={toggleAllHandler}
        // defaultChecked={checkToggleAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </>
  );
};

export default observer(TodoToggleAllButton);
