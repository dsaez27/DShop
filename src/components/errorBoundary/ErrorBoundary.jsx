import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Error, H1 } from "./styled";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMsg: null,
        };
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            errorMsg: error,
        };
    }

    componentDidCatch(error) {
        console.log(
            "🚀 ~ file: ErrorBoundary.jsx:22 ~ ErrorBoundary ~ componentDidCatch ~ error",
            error.message
        );
    }

    render() {
        const navigate = useNavigate();

        if (this.state.hasError) {
            return (
                <Container>
                    <H1>Something went wrong</H1>
                    {this.state.errorMsg && (
                        <Error>{this.state.errorMsg}</Error>
                    )}
                    <Button onClick={() => navigate("/")}>Go to home</Button>
                </Container>
            );
        }

        return this.props.children;
    }
}
