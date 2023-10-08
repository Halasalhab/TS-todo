import React, { useState } from 'react';
import TodoItem from '../components/ToDoItem';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ToDoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newId = todos.length + 1;
      const newTodoItem: Todo = {
        id: newId,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  const markAsCompleted = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: number) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ padding: '8px', marginRight: '8px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px' }}>Add</button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            markAsCompleted={markAsCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
