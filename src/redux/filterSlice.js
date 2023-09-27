const filterInitialState = {
  filter: '',
};

export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case 'filter/setFilter': {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

export const setFilter = newContactName => {
  return {
    type: 'filter/setFilter',
    payload: newContactName,
  };
};
