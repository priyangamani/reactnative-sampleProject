import { all } from "redux-saga/effects";
import getTransactionListAPI from "./getTransactionList";

function* rootSaga() {
  yield all([
    getTransactionListAPI()
  ]);
}

export default rootSaga;
