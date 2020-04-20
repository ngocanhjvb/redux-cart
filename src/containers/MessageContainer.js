import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import Message from "../components/Message";


class MessageContainer extends React.Component {
    render() {
        return (
            <Message>
                {this.props.message}
            </Message>
        )
    }
}

MessageContainer.propTypes = {
    message: PropTypes.array.isRequired
};


const mapStateToProps = state => {
    return {
        message: state.message
    }
}


export default connect(mapStateToProps, null)(MessageContainer)
