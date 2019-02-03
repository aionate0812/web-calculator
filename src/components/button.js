import React from 'react';

const Button = (props) =>{
return (
    <React.Fragment>
    <button className={props.styles}>{props.value}</button>
    </React.Fragment>

)
}

export default Button