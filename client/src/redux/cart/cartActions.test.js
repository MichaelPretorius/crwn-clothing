import { cartActionTypes } from './cartTypes';
import * as actions from './cartActions';

describe('toggleCartHidden action', () => {
  test('should create the toggleCartHidden action', () => {
    expect(actions.toggleCartHidden().type).toEqual(cartActionTypes.TOGGLE_CART_HIDDEN);
  });
});

describe('addItem action', () => {
  test('should create the addItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = actions.addItem(mockItem);

    expect(action.type).toEqual(cartActionTypes.ADD_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('removeItem action', () => {
  test('should create the removeItem action', () => {
    const mockItem = {
      id: 1
    };

    const action = actions.removeItem(mockItem);

    expect(action.type).toEqual(cartActionTypes.REMOVE_ITEM);
    expect(action.payload).toEqual(mockItem);
  });
});

describe('clearItemFromCart action', () => {
  test('should create the clearItemFromCart action', () => {
    const mockItem = {
      id: 1
    };

    const action = actions.clearItemFromCart(mockItem);

    expect(action.type).toEqual(cartActionTypes.CLEAR_ITEM_FROM_CART);
    expect(action.payload).toEqual(mockItem);
  });
});

