import React from 'react';
import s from './FormsControls.module.css';
import {Field} from "redux-form";

const FormControl = ({input, meta: {touched, error}, child, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
};

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea  {...input} {...restProps}/></FormControl>
};
// duplicate code =((
export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div className={s.createFields}>
        <Field class={s.createField} placeholder={placeholder}
               name={name}
               cols={40}
               rows={4}
               validate={validators}
               component={component}
               {...props}
        />
        <div className={s.text}>
            {text}
        </div>
    </div>
);
