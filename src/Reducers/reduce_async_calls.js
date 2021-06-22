import initialState from "./initialState";
import ActionTypes from "./../Actions/ActionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ITEMS_REQUEST:
      return Object.assign({}, state, {
        isLoading: true,
      });
    default:
      return state;
  }
};
export default reducer;
