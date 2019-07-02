import React, {Component} from 'react'
import {actions} from 'mirrorx';
import {Loading, Message, Button} from 'tinper-bee';
import Header from 'components/Header';
import Grid from 'components/Grid';

import SearchArea from '../SearchArea/index';
// import ButtonRoleGroup from 'components/ButtonRoleGroup';


import {deepClone, success, Error, getPageParam} from "utils";

import './index.less';

const format = "YYYY-MM-DD";

export default class IndexView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delModalVisible: false,
        }
    }

    componentDidMount() {
        actions.masterDetailOne.loadList({pageIndex: 0, pageSize: 5});
    }


    onSearch = () => {
        const searchValues = this.child.getSearchValue();
        console.log("searchValues", searchValues);
    }


    orderColumn = [
        {
            title: "编号",
            dataIndex: "orderCode",
            key: "orderCode",
            width: 250,
            render: (text, record, index) => {
                return (
                    <span
                        className="demo-table-code"
                        onClick={(event) => {
                            event.preventDefault();
                            this.goToOrder(record, 2);
                        }}>{text}</span>
                );
            }
        },
        {
            title: "名称",
            dataIndex: "orderName",
            key: "orderName",
            width: 100,
        },
        {
            title: "类型",
            dataIndex: "orderTypeEnumValue",
            key: "orderTypeEnumValue",
            width: 100,

        },
        {
            title: "价格",
            dataIndex: "orderPrice",
            key: "orderPrice",
            width: 80,
            className: 'column-number-right ', // 靠右对齐
            render: (text, record, index) => {
                return (<span>{(typeof text) === 'number' ? text.toFixed(2) : ""}</span>)
            }
        },
        {
            title: "申请人",
            dataIndex: "orderUserName",
            key: "orderUserName",
            width: 200,
        },
        {
            title: "申请部门",
            dataIndex: "orderDeptName",
            key: "orderDeptName",
            width: 150,
        },
        {
            title: "申请日期",
            dataIndex: "orderDate",
            key: "orderDate",
            width: 150,
            render: (text, record, index) => {
                return <div>{text ? moment(text).format(format) : ""}</div>
            }
        },
        {
            title: "流程状态",
            dataIndex: "bpmStateEnumValue",
            key: "bpmStateEnumValue",
            width: 150,
        }
    ];


    render() {

        return (
            <div className="master-detail-one">
                <Header title='B2 一主一子示例 '/>

                <SearchArea
                    // 设置ref属性
                    onRef={(ref) => {
                        this.child = ref;
                    }}
                    search={this.onSearch}
                />


                <div className='table-header'>
                    {/*<ButtonRoleGroup funcCode="masterdetail-one">*/}
                    <Button
                        colors="primary"
                        className="ml8"
                        role="add"
                        size="sm"
                    >新增</Button>
                    <Button
                        shape="border"
                        className="ml8"
                        role="update"
                        size="sm"
                    >修改</Button>
                    <Button
                        shape="border"
                        className="ml8"
                        size="sm"
                    >详情</Button>
                    <Button
                        role="delete"
                        shape="border"
                        className="ml8"
                        size="sm"
                    >删除</Button>
                    {/*</ButtonRoleGroup>*/}
                </div>


                <Grid
                    ref={(el) => this.grid = el}
                    // data={orderObj.list}
                    data={[]}
                    rowKey={(r, i) => i}
                    columns={this.orderColumn}
                    multiSelect={false}
                    dragborder={true}
                    onRowClick={(record, index) => {
                        // 获取子表数据
                        // actions.masterDetailOne.updateState({selectIndex: index}); // 更新默认主表行 数据
                        // const {list} = orderObj;
                        // const {pageSize} = detailObj;
                        // const {id: search_orderId} = list[index];
                        // const param = {search_orderId, pageSize, pageIndex: 0};
                        // actions.masterDetailOne.loadOrderDetailList(param);
                    }}
                    rowClassName={(record, index, indent) => {
                        // return selectIndex === index ? "selected" : "";
                    }}

                    // 分页
                    paginationObj={{
                        // ...this.getBasicPage(orderObj),
                        // freshData: pageSize => this.freshData(pageSize, "orderObj"),
                        // onDataNumSelect: (index, value) => this.onDataNumSelect(index, value, "orderObj"),
                        // dataNum: this.getDataNum(orderObj.pageSize),
                    }}
                />


            </div>

        )

    }
}
