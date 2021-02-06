import { action } from 'typesafe-actions'
import { Todos, TypesTodo } from './types'

export const getTodo = (payload: Todos) => action(TypesTodo.GET_TODOS, payload)