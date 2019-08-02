import { all } from 'redux-saga/effects';
import Cart from '../../pages/Cart';

export default function* rootSaga() {
  return yield all([Cart]);
}
