/**
 * @description Redux Model
 * @author pengdaokuan
 * @createTime 2021-03-09
 * @lastModify 2021-03-09
 */
import RcReduxModel from 'rc-redux-model';
import logger from 'redux-logger';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import globalStore from './globalStore';
import resumeStore from './resumeStore';
const reduxModel = new RcReduxModel([globalStore, resumeStore]);
const reducerList = combineReducers(reduxModel.reducers);

export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger));
