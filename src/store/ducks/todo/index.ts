import { Todos, TypesTodo } from './types'

const initialStateTodo: Todos = {
  arrayTodos: []
}

function reducerTodo(state = initialStateTodo, action: any) {
    switch(action.type) {
      case TypesTodo.GET_TODOS:
        return {
          arrayTodos: action.payload,
        }
      default: 
        return state
    }
}

export default reducerTodo