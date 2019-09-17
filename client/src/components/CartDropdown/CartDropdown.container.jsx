import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom'

import CartDropdown from './CartDropdown';
import { selectCartItems } from '../../redux/cart/cartSelectors';

const mapStateToProp = createStructuredSelector({
    cartItems: selectCartItems
});

const CartDropdownContianer = compose(
    withRouter,
    connect(mapStateToProp)
)(CartDropdown);

export default CartDropdownContianer;