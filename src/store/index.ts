import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'

const initialStateUsuarios = {
  arrayUsuarios: [],
  comida:  'batata',
  bebida: 'coca'
}

function reducerUsuarios(state = initialStateUsuarios, action: any) {
    switch(action.type) {
      case 'GET_USUARIOS':
        return {
          ...state,
          arrayUsuarios: action.payload,
        }
      default: 
        return state
    }
}

const initialStatePost = {
  id: 0,
  title: 'Post legal',
  body: 'meu post'
}

function reducerPost(state = initialStatePost, action: any) {
    switch(action.type) {
      case 'GET_POST':
        return {
          id: action.payload.id,
          title: action.payload.title,
          body: action.payload.body
        }
      default: 
        return state
    }
}

const createRootReducer = () => combineReducers({
  usuarios: reducerUsuarios,
  post: reducerPost
})

const store = createStore(createRootReducer(), composeWithDevTools())

export { store }