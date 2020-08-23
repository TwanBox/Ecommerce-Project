export const initialState = {
  winkelmandje: [],
};

const reducer = (state, action) => {
  console.log(action)
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        winkelmandje: [...state.winkelmandje, action.item],
      };
    case 'REMOVE_ITEM':
      return { state }
    default:
      return state;
  }
};

export default reducer;
