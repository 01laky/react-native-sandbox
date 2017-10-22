import { Record } from 'immutable';

const InitialAppState = Record({
  appIndex: 'app',
})

export default (state = new InitialAppState(), action = {}) => {
  const { type } = action;

  return state;
}
