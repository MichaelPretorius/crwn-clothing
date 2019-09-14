import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...props }) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
            <WrappedComponent {...props} />
        )
};

export default WithSpinner;