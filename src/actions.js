import { put, takeLatest } from 'redux-saga/effects';
import { catchError, switchMap } from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { apiCall } from './apiUtil';

/**
 * redux-thunk apiCall example
 */
export const changeThunkKiwi = () => async (dispatch, getState) => {
    try {
        const kiwi = await apiCall();
        dispatch({
            type: 'CHANGE_KIWI',
            display: kiwi.login
        });
    } catch (error) {
        console.log(error);
    }
};

/**
 * redux-saga apiCall example
 */
export function* getKiwi() {
    try {
        const kiwi = yield apiCall()
        yield put({type: 'CHANGE_KIWI', display: kiwi.login});
    } catch (error) {
        console.log(error)
    }
}

export default function* root() {
    yield takeLatest('CHANGE_SAGA', getKiwi)
}

/**
 * redux-observable apiCall example
 */
const changeKiwiEpic = action$ => action$.pipe(
    ofType('CHANGE_OBSERVABLE'),
    switchMap(async action => {
        const kiwi = await apiCall();
        return { type: 'CHANGE_KIWI', display: kiwi.login};
    }),
    catchError(err => Promise.resolve({type: 'ERROR', message: err.message}))
)

export const rootEpic = combineEpics(changeKiwiEpic);
