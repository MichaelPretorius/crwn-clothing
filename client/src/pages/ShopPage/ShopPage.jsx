import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/CollectionsOverview/CollectionsOverview.container';
import CollectionPageContainer from '../CollectionPage/CollectionPage.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';

const ShopPage = ({ fetchCollectionsStartAsync, match }) => {
    useEffect(() => {
        fetchCollectionsStartAsync()
    }, [fetchCollectionsStartAsync]);

    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
};

export default connect(null, { fetchCollectionsStartAsync })(ShopPage);
