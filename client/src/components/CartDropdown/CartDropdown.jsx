import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { CartDropdownButton, CartItemsContainer, EmptyMessageContainer, CartDropdownContainer } from './CartDropdown.styles';
import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {
          cartItems.length ?
            cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            )) :
            (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)
        }
      </CartItemsContainer>
      <CartDropdownButton onClick={() => {
        history.push('/checkout');
        toggleCartHidden();
      }}>
        GO TO CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, { toggleCartHidden })(CartDropdown));
