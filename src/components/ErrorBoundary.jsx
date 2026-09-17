import { Component } from "react";
import ErrorMsg from "./ErrorMsg";

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorMsg />;
    }
    return this.props.children;
  }
}