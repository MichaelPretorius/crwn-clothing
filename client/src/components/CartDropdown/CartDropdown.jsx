import React from 'react';
import { connect } from 'react-redux';

import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const CartDropdown = ({ cartItems, history, toggleCartHidden }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => (
                            <CartItem key={cartItem.id} item={cartItem} />
                        )) :
                        (<span className="empty-message">Your cart is empty</span>)
                }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                toggleCartHidden();
            }}>
                GO TO CHECKOUT
            </CustomButton>
        </div>
    );
}

export default connect(null, { toggleCartHidden })(CartDropdown);
