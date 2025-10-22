import React from "react";
import { Button } from "./ui/button";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center max-w-md">
            <h1 className="text-4xl font-serif mb-4">Something went wrong</h1>
            <p className="text-muted-foreground mb-8">
              We apologize for the inconvenience. Please try refreshing the page.
            </p>
            <Button
              onClick={() => window.location.reload()}
              size="lg"
              className="bg-gold hover:bg-gold-dark text-background"
            >
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
