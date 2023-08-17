enum ActionTypes {
  SHOW_MODAL = "SHOW_MODAL",
  CLOSE_MODAL = "CLOSE_MODAL",
}

const initialState = {
  isModalOpen: false,
};

interface Action {
  type: ActionTypes;
}

const modal = (state = initialState, action: Action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        isModalOpen: false,
      };
    default:
      return state;
  }
};

export default modal;
