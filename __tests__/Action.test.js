/**
 * @format
 */

import 'react-native';
import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from '../src/utilis/constant'

describe('test render', () => {
  test('fetchData', () => {
      expect(FETCHING_DATA).toBe('FETCHING_DATA');;
  });
  test('fetchDatasuccess', () => {
    expect(FETCHING_DATA_SUCCESS).toBe('FETCHING_DATA_SUCCESS');;
});
test('fetchDataFailure', () => {
  expect(FETCHING_DATA_FAILURE).toBe('FETCHING_DATA_FAILURE');;
});
});