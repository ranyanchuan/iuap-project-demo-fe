import React, { Component } from 'react'
import { FormControl, Label, } from "tinper-bee";
import Form from "bee-form";
//import DatePicker from "bee-datepicker";
import DatePicker from "tinper-bee/lib/Datepicker";
import FormError from '../FormError/index';
import './index.less';
const { MonthPicker } = DatePicker;
const { FormItem } = Form;
class ComMonthPicker extends React.Component {

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
            format = "YYYY-MM",
        } = this.props;
        const { getFieldProps, getFieldError } = form;

        return (
            <FormItem className="range-picker">
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div className="date-input">
                    <MonthPicker
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

export default ComMonthPicker;
