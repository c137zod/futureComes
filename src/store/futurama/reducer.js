import * as types from './actionTypes';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  users: undefined,
  selectedUser: undefined
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.USERS_FETCHED:
      return state.merge({
        users: action.users
      });
    case types.USERS_SUBMIT:
      return state.merge({
        users: action.users
      });
    case types.USER_SELECTED:
      return state.merge({
        selectedUser: action.selectedUser
      });
    default:
      return state;
  }
}

export function getUsers(state) {
  return state.futurama.users;
}

export function getCurrentUser(state) {
  return state.futurama.selectedUser;
}