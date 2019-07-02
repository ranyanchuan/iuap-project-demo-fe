import React, { Component } from 'react'

import { Label, } from "tinper-bee";
import InputNumber from 'bee-input-number';
import 'bee-input-number/build/InputNumber.css';

import Form from "bee-form";
import FormError from '../FormError/index';

const { FormItem } = Form;



class ComInputNumber extends React.Component {

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
            onChange,
            precision,
            min,
            max,
            step
        } = this.props;
        const { getFieldProps, getFieldError } = form;
        return (
            <FormItem>
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div>
                    <InputNumber
                        {...this.props}
                        disabled={disabled} placeholder={placeholder}
                        precision={precision}
                        min={min}
                        max={max}
                        step={step}
                        {...getFieldProps(id, {
                            initialValue,
                            rules: [{ required, message }, { type: 'number' }],
                            onChange
                        })}
                    />
                    {required &&
                        <FormError errorMsg={getFieldError(id)} />
                    }
                </div>
            </FormItem>
        );
    }
}

export default ComInputNumber;
