import React, { Component } from "react";
import loadingIcon from "../assets/img/loading.gif";
import "../HOC/hoc.css";

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
)

const withLoader = (WrappedComponent) => {
    return class LoadIndicator extends Component {
        render() {
            return this.props.isFetching ? <img className="App-logo" src={loadingIcon} /> : <WrappedComponent {...this.props} />;
        }
    }
}

export default withLoader;
