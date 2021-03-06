import {Action, AsyncAction} from '../index';

export const setUsername: Action<string, void> = ({state}, str) => {
  state.user.username = str;
}

