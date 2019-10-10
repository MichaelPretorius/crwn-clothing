import React, { Component } from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText} from './ErrorBoundary.styles';
import ErrorImage from '../../assets/Error.png';

class ErrorBoundary extends Component {
  state = {
    hasErrored: false
  };

  static getDerivedStateFromError(error) {
    // process the error
    return { 
      hasErrored: true
     }
  };

  componentDidCatch(error, info) {
    console.log(error);
  };

  render() {
    if (this.state.hasErrored) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl={ErrorImage} />
          <ErrorImageText>Sorry this page is broken</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  };
}

export default ErrorBoundary;
