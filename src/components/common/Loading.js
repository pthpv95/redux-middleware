import React, { Component } from "react";
import loadingIcon from "../../assets/img/loading.gif";

const Loading = (props) => {
    return (
        <div>
            {props.isLoading && <img src={loadingIcon} />}
        </div>
    );
}

export default Loading;