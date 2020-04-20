export default (state, action) => {
  switch (action.type) {
    case 'Test':
      return {
        ...state,
        string: action.payload,
      };

    default:
      return state;
  }
};
