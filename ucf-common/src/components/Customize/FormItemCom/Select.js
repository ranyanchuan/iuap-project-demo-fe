import React, { Component } from 'react'

import { Label, Select } from "tinper-bee";

import Form from "bee-form";
import FormError from 'common/FormError/index';
import { uuid } from 'tools';

const { FormItem } = Form;


class ComSelect extends React.Component {

    render() {
        const {
            initialValue,
            disabled,
            form,
            required = false,
            id,
            message,
            placeholder = '枚举型',
            label,
            data,
            pattern,
            onChange,
            type='string'
        } = this.props;
        const { getFieldProps, getFieldError } = form;
        // const children = [];
        // for (const item of data) {
        //     children.push(<Option key={item.key}>{item.name}</Option>)
        // }


        return (
            <FormItem>
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div>
                    <Select
                        {...this.props}
                        {...getFieldProps(id, {
                            initialValue,
                            rules: [{ required, message },
                            {
                                pattern, message
                            },
                            {type}
                        ],
                            onChange: onChange
                        })}
                        className='selectStatus'
                        disabled={disabled}
                        placeholder={placeholder}
                        data={data}
                    >
                        {/* {children} */}
                    </Select>
                    {required || pattern ?
                        <FormError errorMsg={getFieldError(id)} /> : null
                    }
                </div>
            </FormItem>
        );
    }
}

export default ComSelect;
