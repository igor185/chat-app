import { createStore, applyMiddleware } from "redux";
import { watchSaga } from "./redux/saga";
import { reducer } from "./redux/reducer";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = () => {
  const middlewareSaga = createSagaMiddleware();
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(middlewareSaga)
  ));
  middlewareSaga.run(watchSaga);
  return store;
};

export default store();
