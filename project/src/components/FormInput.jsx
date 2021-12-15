import React from 'react';

const FormInput = () => {
    const{id, label, type, placeholder} = this.props;
    return (
        <React.Fragment>
            <label for={id}>
                {label}
            </label>
            <input type={type} id={id} plcaholder={placeholder} className={`input`}></input>
        </React.Fragment>
    )
}

export default FormInput;