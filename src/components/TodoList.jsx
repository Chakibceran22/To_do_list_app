import React, { useState, useEffect } from 'react';
import { Trash2, Check, Plus, Moon, Sun } from 'lucide-react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setIsSubmitting(true);
      // Simulate a small delay to show the loading state
      await new Promise(resolve => setTimeout(resolve, 200));
      setTodos([...todos, { 
        id: Date.now(), 
        text: newTodo.trim(), 
        completed: false,
        createdAt: new Date().toISOString()
      }]);
      setNewTodo('');
      setIsSubmitting(false);
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen p-8 transition-colors duration-200 ${
      darkMode ? 'bg-gray-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'
    }`}>
      <div className={`max-w-md mx-auto rounded-xl shadow-lg overflow-hidden ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className={`text-2xl font-bold ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>Todo List</h1>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${
                darkMode 
                  ? 'text-yellow-300 hover:bg-gray-700' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <form onSubmit={addTodo} className="flex gap-2 mb-6">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo..."
              disabled={isSubmitting}
              className={`flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                darkMode 
                  ? 'bg-gray-700 text-white border-gray-600 focus:ring-purple-500 placeholder-gray-400' 
                  : 'bg-white border-gray-200 focus:ring-purple-500 text-gray-800'
              } border disabled:opacity-50 transition-all duration-200`}
            />
            <button
              type="submit"
              disabled={!newTodo.trim() || isSubmitting}
              className={`bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg 
                focus:outline-none focus:ring-2 focus:ring-purple-500 flex items-center justify-center
                transition-all duration-200 min-w-[40px]
                ${!newTodo.trim() || isSubmitting 
                  ? 'opacity-50 cursor-not-allowed' 
                  : 'hover:from-purple-600 hover:to-blue-600 hover:shadow-md active:scale-95'
                }`}
            >
              <Plus 
                size={20} 
                className={`transition-transform duration-200 ${isSubmitting ? 'animate-spin' : ''}`}
              />
            </button>
          </form>

          <div className="space-y-3">
            {todos.map(todo => (
              <div
                key={todo.id}
                className={`flex items-center gap-3 p-3 rounded-lg group transition-all duration-200 ${
                  darkMode 
                    ? 'bg-gray-700/50 hover:bg-gray-700' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200
                    ${todo.completed 
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 border-transparent' 
                      : darkMode 
                        ? 'border-gray-500 hover:border-purple-500' 
                        : 'border-gray-300 hover:border-purple-500'}`}
                >
                  {todo.completed && <Check size={14} className="text-white" />}
                </button>
                
                <span className={`flex-1 transition-all duration-200 ${
                  todo.completed 
                    ? 'text-gray-500 line-through' 
                    : darkMode 
                      ? 'text-gray-200' 
                      : 'text-gray-800'
                }`}>
                  {todo.text}
                </span>

                <button
                  onClick={() => deleteTodo(todo.id)}
                  className={`opacity-0 group-hover:opacity-100 transition-all duration-200 ${
                    darkMode 
                      ? 'text-gray-400 hover:text-red-400' 
                      : 'text-gray-400 hover:text-red-500'
                  }`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          {todos.length === 0 && (
            <p className={`text-center mt-6 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              No todos yet. Add one above!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;