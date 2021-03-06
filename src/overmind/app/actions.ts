import {Action, AsyncAction} from '../index';

export const useLogin: Action<{user: string; pw: string}, {success: boolean; userExists: boolean}> = ({state}, {user, pw}) => {
  if (!state.app.users[user]) return {success: false, userExists: false};
  //TODO make hash function
  if (pw === state.app.users[user].pwHash) return {success: true, userExists: true};
  return {success: false, userExists: true};
}

export const useAddUser: Action<{user: string; pw: string}, {success: boolean; alreadyExists: boolean}> = ({state}, {user, pw}) => {
  if (state.app.users[user]) return {success: false, alreadyExists: true};
  //TODO hash the password
  state.app.users[user] = {username: user, pwHash: pw}
  return {success: true, alreadyExists: false};
}