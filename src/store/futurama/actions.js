import * as types from './actionTypes';
import Service from '../../services/getUsers';
import * as selectors from './reducer';
import Immutable from 'seamless-immutable';

export function fetchData() {
  return async(dispatch) => {
    try {
      const users = await Service.getDefaultUsers();
      dispatch({ type: types.USERS_FETCHED, users });
    } catch (error) {
      console.error(error);
    }
  };
}

export function selectUser(userId) {
  return (dispatch) => {
    dispatch({ type: types.USER_SELECTED, selectedUser: userId  });
  };
}

export function submitForm(id, comment) {
  return async(dispatch, getState) => {
    const currentId = id - 1
    const allUsers = selectors.getUsers(getState());
    const immutableArrayAllUsers = Immutable(allUsers);
    let users = Immutable.asMutable(immutableArrayAllUsers);
    const immutableUserData = Immutable(users[currentId]);
    let mutableUserData = Immutable.asMutable(immutableUserData);
    const array = Immutable(mutableUserData.comments);
    let newComments = Immutable.asMutable(array);
    newComments.push({ comment: { header: comment.header, text: comment.text }})
    mutableUserData.comments = newComments
    users[currentId] = mutableUserData
    dispatch({ type: types.USER_SELECTED, selectedUser: mutableUserData  });
    dispatch({ type: types.USERS_FETCHED, users });
  };
}