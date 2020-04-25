import React from "react";
import {Redirect} from "react-router-dom";
import {SiteRenderer} from "websitelove-lib";

export interface PageState {
    redirectTo?: string;

    currentErrorMessage?: string;
    currentError?:Error;
}

export abstract class Page<P = {}, S extends PageState = {}> extends React.Component<P, S> {

    static contextType = SiteRenderer.USER_CONTEXT;

    constructor(props) {
        super(props);
        (this.state as any) = {};
    }

    redirectTo(url: string) {
        this.setState({
            redirectTo: url
        }, () => {
            this.setState({
                redirectTo: null
            });
        });
    }

    throwError(message:string, error?:Error)
    {
        this.setState({
            currentErrorMessage: message,
            currentError: error
        });
    }

    abstract renderPageContent();

    render() {
        if (this.state.redirectTo) {
            return <Redirect push to={this.state.redirectTo}/>
        }

        return this.renderPageContent();
    }
}