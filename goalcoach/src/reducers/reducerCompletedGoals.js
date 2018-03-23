import { SET_COMPLETED } from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case SET_COMPLETED:
      const { goals } = action;
      return goals;
    default:
      return state;
  }
};