import React, { Fragment } from 'react';

import './style.css';

interface ITodo {
  text: string;
  complete: boolean;
}

type Props = {
  todos: ITodo[];
  removeTodo: (arg: number) => void;
};

const TodoList = (props: Props) => {
  const { todos, removeTodo } = props;
  return (
    <section className='todo-list'>
      {todos.map((todo: ITodo, index: number) => (
        <Fragment key={index}>
          <div className='todo-item'>
            <p
              style={{
                textDecoration: todo.complete ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </p>
            <div className='actions'>
              <button type='button'>
                {todo.complete ? 'incomplete' : 'completed'}
              </button>
              <button type='button' onClick={(): void => removeTodo(index)}>
                Remove Todo
              </button>
            </div>
          </div>
        </Fragment>
      ))}
    </section>
  );
};
export default TodoList;
