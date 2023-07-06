import { takeLatest, call, put ,takeEvery} from "redux-saga/effects";
import {getDataSuccess, getDataFail, API_CALL_REQUEST} from "./Actions/index"
export function* watcherSaga(){
    console.log("watcherSaga")
    yield takeEvery(API_CALL_REQUEST,workerSaga)
}
function fetchData(){ 
    const users=fetch("https://jsonplaceholder.typicode.com/users");
    return users.then(res=>res.json());
    
  }

  function* workerSaga()
  {
    console.log("workerSaga")
       try{
        const users = yield call(fetchData);
        yield put(getDataSuccess(users));
       }
       catch(error)
       {
        yield put (getDataFail(error))
       } 

  }