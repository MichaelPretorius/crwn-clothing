import React from 'react';

import { CartItemContainer, ItemDetailsContainer, CartItemName, CartItemImage } from './CartItem.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt="item" />
      <ItemDetailsContainer>
        <CartItemName>{name}</CartItemName>
        <span>
          {quantity} x R{price}
        </span>
      </ItemDetailsContainer>
    </CartItemContainer>
  );
}

export default React.memo(CartItem);
