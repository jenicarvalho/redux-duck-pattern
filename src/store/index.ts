import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

import reducerUsuarios from './ducks/usuarios'
import reducerTodo from './ducks/todo'

const createRootReducer = () => combineReducers({
  usuario: reducerUsuarios,
  todos: reducerTodo
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }