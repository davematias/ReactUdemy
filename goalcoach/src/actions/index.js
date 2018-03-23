import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from '../constants';

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  };

  return action;
}

export function setGoals(goals) {
  const action = {
    type: SET_GOALS,
    goals
  };

  return action;
}

export function setCompleted(goals) {
  const action = {
    type: SET_COMPLETED,
    goals
  };

  return action;
}