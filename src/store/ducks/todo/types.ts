export enum TypesTodo {
  GET_TODOS = 'GET_TODO'
}

export interface TodoItem {
  id: number,
  title: string
}

export interface Todos {
  arrayTodos: TodoItem[]
}

export interface TodosState {
  todos: Todos
}