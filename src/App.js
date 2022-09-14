import React from 'react';
import { useState } from 'react';
import '../src/App.css'
import TodoList from './components/TodoList';
import InputField from './components/InputField';

function App() {
  const [todos, setTodos] = useState([])
  const [text, setText] = useState('')

  // Метод trim() удаляет пробельные символы с начала и конца строки. 

  // Метод toISOString() возвращает строку в формате ISO (расширенный формат ISO 8601), который можно описать следующим образом: YYYY-MM-DDTHH:mm:ss.sssZ. Часовой пояс всегда равен UTC, что обозначено суффиксом "Z".

  // ... Спред оператор - Конкретно в этом случае три точки — это оператор расширения. Он «разбивает» объект на набор его элементов и отдаёт их по порядку. Можно представить, что если объект — это набор чего-то в обёртке, то оператор расширения надрывает эту обёртку, и из объекта всё высыпается.

  // &times;	&#215;	×	знак умножения - спецсимволы html

  // Проверка элемента осуществляется с помощью проверки состояния элемента:элемент.checked

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        }

      ])
      setText('')
    }
  }

  const toggleTodoComplete = (todoId) => {
    setTodos(
      todos.map(
        todo => {
          if (todo.id !== todoId) return todo;

          return {
            ...todo,
            completed: !todo.completed,
          }
        }
      )
    )
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className='App'>

      <InputField
        text={text}
        handleInput={setText}
        handleSubmit={addTodo} />

      <TodoList
        todos={todos}
        toggleTodoComplete={toggleTodoComplete}
        removeTodo={removeTodo}
      />
      
    </div>
  );
}

export default App;