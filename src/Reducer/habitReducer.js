export const initialState = {
  Habits: [],
  Archive: [],
};

export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_HABITS":
      return {
        ...state,
        Habits: [...state.Habits, payload]
      };
    case "DELETE_HABITS":
      return {};
    case "ARCHIVE_HABITS":
      return {};
    case "EDIT_HABITS":
      return {};
    default:
      return state;
  }
};
