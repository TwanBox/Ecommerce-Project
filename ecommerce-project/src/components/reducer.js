export const initialState = {
  winkelmandje: [],
  user: null,
};

export const getTotalPrice = (winkelmandje) =>
winkelmandje?.reduce((price, item) => item.price + price, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_ITEM':
      return {
        ...state,
        winkelmandje: [...state.winkelmandje, action.item],
      };
    case 'REMOVE_ITEM':
      const newMandje = [...state.winkelmandje];
      const index = state.winkelmandje.findIndex((item) => item.id === action.id);
      if (index >= 0) {
        newMandje.splice(index, 1);
      }

      return { ...state, winkelmandje: newMandje };
    default:
      return state;
  }
};

export default reducer;
