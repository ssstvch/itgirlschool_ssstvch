import React from 'react';
import FormInput from './FormInput';
import Button from './Button';

const inputs = [
    {id: "name", label: "Name", type: "text", placeholder: "Type your name"},
    {id: "email", label: "E-mail", type: "email", placeholder: "Type your e-mail"},
    {id: "password", label: "Password", type: "password", placeholder: "Type password"},
    {id: "confirm-password", label: "Confirm Password", type: "password", placeholder: "Confirm password"}
]


const Form = () => {
    return (
        <React.Fragment>
            <form class={`form`}>
                <h3 className={`form__title`}>
                    Create an account
                </h3>
                
                {
                    inputs.map((input) => {
                        <FormInput id={input.id} label={input.label} type={input.type} placeholder={input.placeholder}/>
                    })
                }

                <Button type={"submit"} className={"button form__button"} text={"Submit"}/>

                <p className={`form__text`}>
                    Have an account?
                    <a className={`form__link`}>Sign in</a>
                </p>
            </form>
        </React.Fragment>
    )
}

export default Form;