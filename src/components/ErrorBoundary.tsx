import React, { Component } from 'react';

type ErrorBoundaryProps = {
  children: JSX.Element | JSX.Element[];
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    return hasError ? <h1>Oooops. That is not good</h1> : children;
  }
}

export default ErrorBoundary;
