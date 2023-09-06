export const TOGGLE_OPEN_MODAL = "TOGGLE_OPEN_MODAL";

export const toggleOpenModal = (Children, title, customStyle = {}) => {
  return {
    type: TOGGLE_OPEN_MODAL,
    payload: { Children, title, customStyle },
  };
};
