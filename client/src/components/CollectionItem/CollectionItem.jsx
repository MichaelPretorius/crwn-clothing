import React from 'react';
import { connect } from 'react-redux';

import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { addItem } from '../../redux/cart/cartActions';

const CollectionItem = ({ item, addItem }) => {
    const { name, imageUrl, price } = item;

    return (
        <div className="collection-item">
            <div className="image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">R{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>
                Add To Cart
            </CustomButton>
        </div>
    );
}

export default connect(null, { addItem })(CollectionItem);