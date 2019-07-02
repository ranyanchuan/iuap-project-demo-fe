import React, {Component} from 'react'

import './index.less'

class FormItemCom extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        const {label,children} = this.props;

        return (
            <div className="scm-item">
                <div className="scm-label">{label}</div>
                <div className="scm-input">
                    {children}
                </div>
            </div>
        )
    }
}

export default FormItemCom
