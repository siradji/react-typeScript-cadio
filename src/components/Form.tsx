import React, { Fragment, useState } from 'react';
import TodoList from './TodoList';

import './style.css';

type FormElem = React.FormEvent<HTMLFormElement>;

interface ITodo {
  text: string;
  complete: boolean;
}

const Form = (): JSX.Element => {
  const [value, setValue] = useState<string>('');
  const [todos, setTodos] = useState<ITodo[]>([]);

  //  submit todo
  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  // add to
  const addTodo = (text: string): void => {
    const newTodo: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodo);
  };

  const removeTodo = (index: number): void => {
    const newTodo: ITodo[] = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          required
          value={value}
          onChange={(e): void => setValue(e.target.value)}
        />
        <button type='submit'> Add Todo </button>
      </form>
      <TodoList todos={todos} removeTodo={removeTodo} />
    </Fragment>
  );
};

export default Form;
