import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            errorMsg: null,
        };
    }

    static getDerivedStateFromError(error) {
        //método 1
        return {
            hasError: true,
            errorMsg: error,
        };
    }

    componentDidCatch(error) {
        //método 2
        console.log("Component did catch: ", error.message);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1></h1>
                    <p></p>
                    <button onClick={() => (window.location.href = "/")}>
                        Recargar la página
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}


