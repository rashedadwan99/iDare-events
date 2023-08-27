import { TOGGLE_OPEN_MODAL } from "../actions/modalAction";

const initialState = {
  showModal: false,
};
export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN_MODAL:
      return { ...state, showModal: !state.showModal };

    default:
      return state;
  }
};
