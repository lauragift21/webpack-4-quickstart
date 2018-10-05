/**
 *
 * @param {*} article
 * @description The actions are what triggers the state to change by dispatching actions
 */
import { ADD_ARTICLE } from '../constants/action-types';

export const addArticle = article => ({
  type: "ADD_ARTICLE",
  payload: article
});