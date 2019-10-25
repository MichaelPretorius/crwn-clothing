import { cartActionTypes } from './cartTypes';
import cartReducer, { INITIAL_STATE } from './cartReducer';

describe('cartReducer', () => {
  test('should return initial state', () => {
    expect(cartReducer(undefined, {})).toEqual(INITIAL_STATE);
  })
  
  test('should toggle hidden with toggleHidden', () => {
    expect(cartReducer(INITIAL_STATE, { type: cartActionTypes.TOGGLE_CART_HIDDEN }).hidden).toEqual(false);
  });

  test('should increase quantity of matching item by 1 if addItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(cartReducer(mockPrevState, {
      type: cartActionTypes.ADD_ITEM,
      payload: mockItem
    }).cartItems[0].quantity).toEqual(4);
  });

  test('should decrease quantity of matching item by 1 if removeItem action fired with same item as payload', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: cartActionTypes.REMOVE_ITEM,
        payload: mockItem
      }).cartItems[0].quantity
    ).toEqual(2);
  });

  test('should remove item from cart if clearItemFromCart action fired with payload of existing item', () => {
    const mockItem = {
      id: 1,
      quantity: 3
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }]
    };

    expect(
      cartReducer(mockPrevState, {
        type: cartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: mockItem
      }).cartItems.includes(item => item.id === 1)
    ).toEqual(false);
  });
});