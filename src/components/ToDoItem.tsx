import React from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoItemProps {
  todo: Todo;
  markAsCompleted: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, markAsCompleted, deleteTodo }) => {
  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', width: '40%', borderBottom: '1px solid grey', padding: '10px' }}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => markAsCompleted(todo.id)}
        style={{ marginRight: '8px' }}
      />
      <span
        style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            flex: '1',
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '4px 8px' }}>Delete</button>
    </li>
  );
};

export default TodoItem;
