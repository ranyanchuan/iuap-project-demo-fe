import React, { Component } from 'react'

import { Label, Checkbox } from "tinper-bee";

import Form from "bee-form";
import FormError from 'common/FormError/index';

const { FormItem } = Form;


class ComCheckBox extends React.Component {

    render() {
        const {
            initialValue = "",
            disabled,
            form,
            required = false,
            label,
            id,
            message,
            onChange,
            defaultChecked,
            checked
        } = this.props;
        const { getFieldProps, getFieldError } = form;
        return (
            <FormItem>
                <Label className={required ? "mast" : ""}>{label}</Label>
                <Checkbox
                    {...this.props}
                    {...getFieldProps(id, {
                        initialValue,
                        rules: [{ required, message }],
                        onChange,
                    })}
                    defaultChecked={defaultChecked}
                    disabled={disabled}
                    checked={form.getFieldValue(id) == '' ? false : true}
                >


                </Checkbox>
                {required &&
                    <FormError errorMsg={getFieldError(id)} />
                }
            </FormItem>
        );
    }
}

export default ComCheckBox;
