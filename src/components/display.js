import React from 'react';

const Display = (props) => {
    return (
        <React.Fragment>
        <div>
            <h1>{props.currentElement}</h1>
        </div>
        </React.Fragment>
    )
}

export default Display