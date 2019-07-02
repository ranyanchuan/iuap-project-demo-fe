import React, { Component } from 'react'
import { FormControl, Label, } from "tinper-bee";
import Form from "bee-form";
import DatePicker from "bee-datepicker";
import FormError from 'common/FormError/index';
import './index.less';

const { FormItem } = Form;
class ComDatePicker extends React.Component {

    render() {
        let {
            initialValue = [],
            disabled,
            form,
            required = false,
            label,
            id,
            message,
            placeholder = "请选择日期",
            format = "YYYY-MM-DD",
        } = this.props;
        const { getFieldProps, getFieldError } = form;

        return (
            <FormItem className="range-picker">
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div className="date-input">
                    <DatePicker
                        {...this.props}
                        disabled={disabled}
                        format={format}
                        placeholder={placeholder}
                        {...getFieldProps(id, {
                            initialValue,
                            rules: [{ required, message },
                            ]
                        }
                        )}
                    />
                    {required &&
                        <div className="range-error">
                            <FormError errorMsg={getFieldError(id)} />
                        </div>
                    }

                </div>
            </FormItem>
        );
    }
}

export default ComDatePicker;
