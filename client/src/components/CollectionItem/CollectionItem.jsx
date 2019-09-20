import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cartActions';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  BackgroundImage,
  NameContainer,
  PriceContainer,
  ButtonContainer
} from './CollectionItem.styles';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>R{price}</PriceContainer>
      </CollectionFooterContainer>
      <ButtonContainer inverted onClick={() => addItem(item)}>
        Add To Cart
            </ButtonContainer>
    </CollectionItemContainer>
  );
}

export default connect(null, { addItem })(CollectionItem);