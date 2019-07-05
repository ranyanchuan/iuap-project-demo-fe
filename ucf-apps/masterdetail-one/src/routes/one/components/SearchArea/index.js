import React, {Component} from 'react'
import {actions} from "mirrorx";
import {Form, Button} from "tinper-bee";


import {ComInput, ComDatePicker, ComRadio, ComSelect} from 'components/Customize/FormItemCom';
import './index.less'


class SearchArea extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    componentDidMount() {
        this.props.onRef(this)
    }

    search = () => {
        this.props.search();
    }

    getSearchValue = () => {
        let result = null;
        this.props.form.validateFields((err, values) => {
            result = values;
        });
        return result;
    }

    /**
     * 清空 action里的搜索条件
     */
    reset = () => {
        this.props.form.resetFields();
        // actions.mediumreport.resetFields();

    }


    render() {

        const {form} = this.props;

        return (
            <Form className="customize-form">
                <div className="form-panel form-search">

                    <ComInput
                        form={form}
                        id="search_orderCode"
                        label="编号"
                        placeholder='模糊查询'
                    />


                    <ComInput
                        form={form}
                        id="search_orderName"
                        label="名称"
                        placeholder='模糊查询'
                    />
                    <ComInput
                        form={form}
                        id="search_orderCode"
                        label="编号"
                        placeholder='模糊查询'
                    />


                    <ComInput
                        form={form}
                        id="search_orderName"
                        label="名称"
                        placeholder='模糊查询'
                    />
                    <ComInput
                        form={form}
                        id="search_orderCode"
                        label="编号"
                        placeholder='模糊查询'
                    />


                    <ComInput
                        form={form}
                        id="search_orderName"
                        label="名称"
                        placeholder='模糊查询'
                    />

                    <ComSelect
                        form={form}
                        id='search_orderType'     //id:字段英文名
                        data={[
                            {value: '', key: '请选择'},
                            {value: '1', key: '普通采购'},
                            {value: '2', key: '委托代销'},
                            {value: '3', key: '直运采购'},
                        ]}  //传参，数组型
                        label="类型"   //字段名
                    />


                    {/*避免 查询和重置 独自一列*/}
                    <div className="form-search">
                        <ComSelect
                            form={form}
                            id='search_orderType'     //id:字段英文名
                            data={[
                                {value: '', key: '请选择'},
                                {value: 0, key: '待确认'},
                                {value: 1, key: '执行中'},
                                {value: 2, key: '已办结'},
                                {value: 3, key: '终止'},
                            ]}  //传参，数组型
                            label="流程状态"   //字段名
                        />
                        <div className="search-item-btn">
                            <Button colors="primary" onClick={this.search} size="sm"> 查询 </Button>
                            <Button shape="border" className="ml10" onClick={this.reset} size="sm"> 重置 </Button>
                        </div>
                    </div>


                </div>
            </Form>
        )
    }
}

export default Form.createForm()(SearchArea)
