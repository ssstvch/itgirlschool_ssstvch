import React from 'react';


const Button = () => {
    const {type, text, className} = this.props;
    return (
        <React.Fragment>
            <button type={type} className={`button ${className}`}>{text}</button>
        </React.Fragment>
    )
}

export default Button;