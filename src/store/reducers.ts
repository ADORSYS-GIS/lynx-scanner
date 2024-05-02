interface AppState {
  isLoggedIn: boolean;
}

const initialState: AppState = {
  isLoggedIn: false,
};

const rootReducer = (
  state: AppState = initialState,
  action: { type: string }
): AppState => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default rootReducer;
