import React, {PropsWithChildren} from 'react';

interface ErrorBoundaryOps {
    hasError: boolean,
}

interface ErrorBoundaryProps {
    fallback: React.ReactNode
}

type propsOps = ErrorBoundaryProps & PropsWithChildren

class ErrorBoundary extends React.Component<propsOps, ErrorBoundaryOps> {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        this.setState({
            hasError: true
        })
    }

    componentDidCatch(error, info) {
        console.error(error, info.componentStack);
        return this.setState({
            hasError: true
        })
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback;
        }
        return this.props.children;
    }
}

export default ErrorBoundary