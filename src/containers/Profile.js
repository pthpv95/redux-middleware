import React from 'react';
import auth from '../actions/index';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(auth.getCurrentAgent()),
    onunLoad: () => dispatch(auth.unloadLogginPage())
});

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    componentDidMount() {
        this.props.onLoad();
    }

    componentWillUnmount() {
        this.props.onunLoad();
    }

    render() {
        const profile = this.props.profile;

        return (
            <div>
                <p>Profile</p>
                <p>Email: {profile.email}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);