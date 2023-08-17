<<<<<<< HEAD
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
=======
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
>>>>>>> 2311233f782c5251c94a4fa3de5970de965e3c02
