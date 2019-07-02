import React, {Component} from "react";
import {actions} from "mirrorx";
import {Loading, Icon, Modal, Form} from "tinper-bee";


import {getValidateFieldsTrim} from "utils";

import {uuid, deepClone, getCookie, Info, getPageParam} from "utils";
import './index.less'


class IndexView extends Component {
    constructor(props) {
        super(props);


        this.state = {}

    }


    render() {

        return (
            <div className='purchase-order'>
                <div>order</div>
            </div>
        )
    }
}

export default Form.createForm()(IndexView);

