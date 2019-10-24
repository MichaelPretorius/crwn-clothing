import { ShopActionTypes } from './shopTypes';
import * as actions from './shopActions';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);

describe('fetchCollectionsStart action', () => {
  test('should create the fetchCollectionsStart action', () => {
    expect(actions.fetchCollectionsStart().type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
  });
});

describe('fetchCollectionsSuccess action', () => {
  test('should create the fetchCollectionsSuccess action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = actions.fetchCollectionsSuccess(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});

describe('fetchCollectionsFailure action', () => {
  test('should create the fetchCollectionsFailure action', () => {
    const errorMessage = "error";

    const action = actions.fetchCollectionsFailure(errorMessage);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_FAILURE);
    expect(action.payload).toEqual(errorMessage);
  });
});

describe('fetchCollectionsStartAsync action', () => {
  test('should create the fetchCollectionsStartAsync action', () => {
    const store = mockStore();
    store.dispatch(actions.fetchCollectionsStartAsync())
    const action = store.getActions();

    expect(action[0].type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_START);
  });
});