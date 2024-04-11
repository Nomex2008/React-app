export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum TodoActionTypes {
    FETCH_TODOS = 'FETCH_TODOS',
    FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
    FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
    FETCH_TODO_PAGES = 'FETCH_TODO_PAGES',
}
interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODOS_SUCCESS;
    payload: any[];
}
interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODOS_ERROR;
    payload: string;
}
interface FetchTodoPageAction {
    type: TodoActionTypes.FETCH_TODO_PAGES
    payload: number;
}

export type TodoAction =
    FetchTodoAction
    | FetchTodoSuccessAction
    | FetchTodoErrorAction
    | FetchTodoPageAction