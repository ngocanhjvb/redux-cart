import React from 'react';
import {CSSTransition} from 'react-transition-group';

class Message extends React.Component {
    render() {
        return (
            <h3>
                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={300}
                    className="example"
                >
                    <span className="badge amber darken-2">{this.props.children}</span>
                </CSSTransition>

            </h3>
        );
    }
}

export default Message;
