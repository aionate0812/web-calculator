import React from 'react';

const Display = (props) => {
    return (
        <React.Fragment>
            <div className={props.styles}>
                <h1>{props.currentElement}</h1>
            </div>
        </React.Fragment>
    )
}

export default Display