import React from 'react';
import TodoStore from '../stores/TodoStore';

const StoreContext = React.createContext<TodoStore | undefined>(undefined);

export default StoreContext;
