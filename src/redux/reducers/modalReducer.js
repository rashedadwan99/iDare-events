import { TOGGLE_OPEN_MODAL } from "../actions/modalAction";

const initialState = {
  showModal: false,
  Children: <></>,
  title: "",
  customStyle: {},
};
export const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_OPEN_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
        Children: action.payload.Children,
        title: action.payload.title,
        customStyle: action.payload.customStyle,
      };

    default:
      return state;
  }
};
