import React, { Component } from 'react'
import { FormControl, Label, } from "tinper-bee";
import Form from "bee-form";
import DatePicker from "bee-datepicker";
import FormError from '../FormError/index';
import './index.less';

const { FormItem } = Form;
const { RangePicker } = DatePicker;

class ComRangePicker extends React.Component {

    render() {
        let {
            initialValue = [],
            disabled,
            form,
            required = false,
            label,
            id,
            message,
            placeholder = "请选择起止日期",
            format = "YYYY-MM-DD",
            dateInputPlaceholder = ["开始时间", "结束时间"],

        } = this.props;
        const { getFieldProps, getFieldError } = form;

        return (
            <FormItem className="range-picker">
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div className="date-input">
                    <RangePicker
                        {...this.props}
                        disabled={disabled}
                        format={format}
                        placeholder={placeholder}
                        dateInputPlaceholder={dateInputPlaceholder}
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

export default ComRangePicker;
