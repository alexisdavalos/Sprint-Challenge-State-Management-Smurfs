import { createStore, applyMiddleware } from 'redux';
import {smurfReducer} from './reducers/smurfsReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const configRedux = () => createStore(smurfReducer, applyMiddleware(thunk, logger));

export default configRedux;