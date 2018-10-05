/**
 * @description The reducers is what produces the state of the application
 * A reducer is just a Javascript function. A reducer takes two parameters: the current state and an action
 * This is why the reducer must be pure. A pure function is one that returns the exact same output for the given input.
 */
import { ADD_ARTICLE } from '../constants/action-types';

const initialState = {
  articles: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return {...state, articles: [...state.articles.concat(action.payload)]};
    default:
      return state;
  }
};

export default rootReducer;