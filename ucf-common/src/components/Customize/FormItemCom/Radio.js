import React, { Component } from 'react'

import { Label, Radio } from "tinper-bee";

import Form from "bee-form";
import FormError from 'common/FormError/index';

const { FormItem } = Form;

const { RadioGroup } = Radio
class ComRadio extends React.Component {

    render() {
        const {
            defaultValue:initialValue,
            disabled,
            form,
            required = false,
            label,
            id,
            message,
            onChange,
            data,
            selectedValue,
            style,
            colors,
            size
        } = this.props;
        const { getFieldProps, getFieldError } = form;
        const children = [];
        for (const item of data) {
            children.push(<Radio colors={colors} style={style} key={item.value} value={item.value}> {item.name}</Radio>)
        }
        return (
            <FormItem>
                <Label className={required ? "mast" : ""}>{label}</Label>
                <Radio.RadioGroup
                    {...this.props}
                    {...getFieldProps(id, {
                        initialValue,
                        rules: [{ required, message }],
                        onChange,

                    })}
                    disabled={disabled}
                    selectedValue={selectedValue}
                    size={size}

                >
                    {children}
                </Radio.RadioGroup >
                {/* {required &&
                    <FormError errorMsg={getFieldError(id)} />
                } */}
            </FormItem>
        );
    }
}

export default ComRadio;
