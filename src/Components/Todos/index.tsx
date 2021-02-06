import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import { getTodo } from '../../store/ducks/todo/actions'
import { TodoItem, TodosState } from '../../store/ducks/todo/types'

const Todos  = () => {

  const dispatch = useDispatch()

  const todos = useSelector((state: TodosState) => state.todos.arrayTodos)

  const buscaPost = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then(resposta => dispatch(getTodo(resposta.data)))
  }

  return (
    <div>
      <ul>
      { todos && todos.map ((item: TodoItem) => (
        <li key={item.id}>{item.title} - {item.id}</li>
        ))}
    </ul>

      <button onClick={buscaPost}>Buscar meus Todos</button>
    </div>
  );
}

export default Todos;