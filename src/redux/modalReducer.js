const OPEN__MODAL = 'OPEN__MODAL';
const CLOSE__MODAL= 'CLOSE__MODAL';

const initialState = {
  isOpened: true
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN__MODAL: 
      return {
        ...state,
        isOpened: true
      };
    case CLOSE__MODAL:
      return {
        ...state,
        isOpened: false
      };
    default:
      return state
  };
};

export const openModal = () => {
  return {
    type: OPEN__MODAL
  };
};

export const closeModal = () => {
  return {
    type: CLOSE__MODAL
  };
};

export default modalReducer;
