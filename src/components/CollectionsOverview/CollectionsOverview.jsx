import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CollectionsOverview.scss';
import { selectCollectionsForPreview } from '../../redux/shop/shopSelectors';
import CollectionPreview from '../CollectionPreview/CollectionPreview';

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...props }) => (
                <CollectionPreview key={id} {...props} />
            ))}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
