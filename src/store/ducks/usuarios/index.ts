import { Usuario, UsuariosTypes } from './types'

const initialStateUsuarios: Usuario = {
  name: '',
  username: '',
  email: ''
}

function reducerUsuarios(state = initialStateUsuarios, action: any) {
    switch(action.type) {
      case UsuariosTypes.GET_USUARIO:
        return {
          name: action.payload.name,
          username: action.payload.username,
          email: action.payload.email
        }
      default: 
        return state
    }
}

export default reducerUsuarios