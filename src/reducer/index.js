export const initialState = { todos: [], todoCardItems: [], allCards: [] };

function reducer(state = initialState, action) {
  let index;
  let newTodos;
  console.log("action", action);
  console.log("state", state);
  switch (action.type) {
    case "ADD_CARD_ITEMS":
      return {
        ...state,
        allCards: [...state.allCards, action.cardItems],
      };
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.item],
      };
    case "DELETE_TODO":
      index = state.todos.findIndex((todosItem) => todosItem.id === action.id);
      newTodos = [...state.todos];

      if (index >= 0) {
        newTodos.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
}

export default reducer;
