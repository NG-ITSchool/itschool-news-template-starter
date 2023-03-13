export const initialState = {
  news: [],
};

export const favoritesReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
    }
    case "REMOVE_FROM_FAVORITES": {
    }
    default: {
      return state;
    }
  }
};
