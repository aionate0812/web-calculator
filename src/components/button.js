import React from 'react';

class Button extends React.Component {

    handleOnClick = (e) => {
        this.props.handleButtonPressed(e.target.innerHTML)
    }

    render () {
        return (
            <React.Fragment>
            <button onClick={this.handleOnClick} className={this.props.styles}>{this.props.value}</button>
        </React.Fragment>
        )
    }
}




export default Button