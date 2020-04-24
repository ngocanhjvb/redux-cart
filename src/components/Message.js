import React from 'react';

class Message extends React.Component {

    constructor() {
        super()
        this.state = {fadeClass: false};
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            fadeClass: false
        })
        setTimeout(() => {
            this.setState({
                fadeClass: true
            })
        }, 2000)
    }


    render() {
        return (
            <h3>
                <span
                    className={this.state.fadeClass ? "badge amber darken-2 fadeMessage" : "badge amber darken-2"}>{this.props.children}</span>
            </h3>
        );
    }
}

export default Message;
