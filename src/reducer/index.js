export const initialState = {
  todos: [],
  todoCardItems: [],
  allCards: [],
  todoList: [],
};

function reducer(state = initialState, action) {
  let index;
  let listIndex;
  let newTodos;
  let newAllCards;
  console.log(state.allCards);
  switch (action.type) {
    case "ADD_CARD_ITEMS":
      return {
        ...state,
        allCards: [...state.allCards, action.cardItems],
      };
    case "ADD_TODO":
      return {
        ...state,
        todoList: [...state.todoList, action.todos],
      };
    case "DELETE_TODO":
      index = state.todoList.findIndex(
        (todosItem) => todosItem.todoUniqId === action.id
      );
      newTodos = [...state.todoList];

      if (index >= 0) {
        newTodos.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        todoList: newTodos,
      };
    case "DELETE_LIST":
      listIndex = state.allCards.findIndex(
        (cardListItems) => cardListItems.id === action.id
      );
      newAllCards = [...state.allCards];

      if (listIndex >= 0) {
        newAllCards.splice(listIndex, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        allCards: newAllCards,
      };
    default:
      return state;
  }
}

export default reducer;
