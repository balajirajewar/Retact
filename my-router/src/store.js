import { applyMiddleware, createStore } from "redux";
import userDataReducer from  "./Reducers/index"
import createSagaMiddleware from  "redux-saga"
import { watcherSaga } from "./saga";
const sagaMiddleWate = createSagaMiddleware();

const store = createStore(userDataReducer, applyMiddleware(sagaMiddleWate));
sagaMiddleWate.run(watcherSaga);
export default store;