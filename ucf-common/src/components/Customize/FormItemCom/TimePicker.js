import React, { Component } from 'react'
import { Label, } from "tinper-bee";
import Timepicker from "tinper-bee/lib/Timepicker";
import Form from "bee-form";
import moment from 'moment';
import FormError from '../FormError/index';

import './index.less';

const { FormItem } = Form;
const now = moment().hour(0).minute(0);

class ComTimePicker extends React.Component {

    render() {
        let {
            defaultValue = now,
            disabled,
            form,
            required = false,
            label,
            id,
            message,
            placeholder = "请选择时间",
            format = "HH:mm:ss",
            showSecond,
            onChange,
            use12Hours = false
        } = this.props;
        const { getFieldProps, getFieldError } = form;

        return (
            <FormItem className="range-picker">
                <Label className={required ? "mast" : ""}>{label}</Label>
                <div className="date-input">
                    <Timepicker
                        {...this.props}
                        format={format}
                        showSecond={showSecond}
                        placeholder={placeholder}

                        use12Hours={use12Hours}
                        disabled={disabled}
                        {...getFieldProps(id, {
                            initialValue: defaultValue,
                            rules: [{ required, message },
                            ],
                            onChange
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

export default ComTimePicker;
