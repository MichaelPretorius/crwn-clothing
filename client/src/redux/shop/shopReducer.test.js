import { ShopActionTypes } from './shopTypes';
import shopReducer, { INITIAL_STATE } from './shopReducer';

describe('shopReducer', () => {
  test('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(INITIAL_STATE);
  });

  test('should set isFetching true if fetchingCollectionsStart action', () => {
    expect(shopReducer(INITIAL_STATE, {
      type: ShopActionTypes.FETCH_COLLECTIONS_START
    }).isFetching).toEqual(true);
  });

  test('should set isFetching false and collections to payload if fetchingCollectionsSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(shopReducer(INITIAL_STATE, {
      type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
      payload: mockItems
    })).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      collections: mockItems
    });
  });

  test('should set isFetching false and errorMessage to payload if fetchingCollectionsFailure', () => {
    const errorMessage = 'error';
    expect(shopReducer(INITIAL_STATE, {
      type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
      payload: errorMessage
    })).toEqual({
      ...INITIAL_STATE,
      isFetching: false,
      errorMessage
    });
  });
});