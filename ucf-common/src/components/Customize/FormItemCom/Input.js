import React, { Component } from 'react'

import { FormControl, Label, } from "tinper-bee";

import Form from "bee-form";
import FormError from 'common/FormError/index';

const { FormItem } = Form;



class ComInput extends React.Component {

    render() {
        const {
            initialValue = "",
            disabled,
            form,
            required = false,
            label,
            id,
            message,
            placeholder = "请输入",
            pattern,
            componentClass,
            onChange,
            type,
        } = this.props;
        const { getFieldProps, getFieldError } = form;
        return (
            <FormItem>
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div>
                <FormControl
                    {...this.props}
                    componentClass={componentClass}
                    disabled={disabled} placeholder={placeholder}

                    type={type}
                    {...getFieldProps(id, {
                        initialValue,
                        rules: [{ required, message }, {
                            pattern, message
                        }],
                        onChange
                    })}
                />
                {required ?
                    <FormError errorMsg={getFieldError(id)} />:pattern?<FormError errorMsg={getFieldError(id)} />:null
                }
                {/* {pattern &&
                    <FormError errorMsg={getFieldError(id)} />
                } */}
                </div>
            </FormItem>
        );
    }
}

export default ComInput;
