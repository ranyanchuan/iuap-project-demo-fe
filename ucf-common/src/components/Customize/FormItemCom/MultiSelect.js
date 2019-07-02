import React, { Component } from 'react'

import { Select, Label } from "tinper-bee";

import Form from "bee-form";
import FormError from '../FormError/index';

const { FormItem } = Form;
const Option = Select.Option;
const OptGroup = Select.OptGroup;

class ComMultiSelect extends React.Component {

    render() {
        const {
            initialValue = [], disabled,
            form,
            required = false,
            label,
            id,
            message,
            placeholder,
            data, multiple = false, pattern
        } = this.props;
        const { getFieldProps, getFieldError } = form;
        const Children = [];
        data.map((row) => {
            Children.push(<Option key={row.key}>{row.name}</Option>);
        })

        return (
            <FormItem>
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div>
                    <Select
                        {...this.props}
                        multiple={multiple} //支持多选
                        disabled={disabled} placeholder={placeholder}
                        {...getFieldProps(id, {
                            initialValue,
                            rules: [{ required, message }]
                        })}
                    >
                        {Children}
                    </Select>
                    {required || pattern ?
                        <FormError errorMsg={getFieldError(id)} /> : null
                    }
                </div>
            </FormItem>
        );
    }
}

export default ComMultiSelect;
