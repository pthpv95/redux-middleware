import * as types from "../constants/ActionTypes";

const addTodo = text => ({ type: types.ADD_TODO, text });
function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id
    }
}
const editTodo = (id, text) => ({
    type: types.EDIT_TODO,
    id, text
})
const completeTodo = id => ({ type: types.COMPLETE_TODO, id });
const completeAllTodos = id => ({ type: types.COMPLETE_ALL_TODO });
const clearAllTodos = id => ({ type: types.CLEAR_ALL_TODO });