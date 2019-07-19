import React, { Component } from 'react';

import { Form, Label, Button, FormControl, Select, InputNumber } from 'tinper-bee';
import FormError from 'components/FormError';
import RefCommon from 'components/RefCommon';
import './index.less';

const FormItem = Form.FormItem;
const { Option } = Select;

class TreeForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            rowData: {},
        }
    }

    componentDidMount() {

        const { onRef } = this.props;
        if (onRef) {
            this.props.onRef(this)
        }
    }

    componentWillReceiveProps(nextProps) {

        const { archivesInfo } = nextProps;
        if (this.props.archivesInfo !== archivesInfo) {
            this.props.form.resetFields();// 重置表单
        }
    }

    onResetField = () => {
        this.props.form.resetFields();// 重置表单
    }


    onSaveForm = () => { // 获取表单数据
        let result = null;

        // const temp = this.props.form.getFieldsValue(['orgId']).orgId;

        // const {refpk: orgId, refname: orgName} = JSON.parse(temp);

        this.props.form.validateFields((err, values) => {
            if (!err) {
                result = values; //  验证通过
                // result.orgId = orgId;
                // result.orgName = orgName;

            }
        });
        return result;
    }


    render() {
        const _this = this;
        const { form, archivesInfo, status } = _this.props;

        const disabled = ['add', 'update'].includes(status) ? false : true;
        const { getFieldProps, getFieldError } = form;


        return (
            <Form className="auto-form">
 
               <FormItem className="auto-form-item">
                    <Label className="auto-label">产品编码</Label>
                    <div className="auto-content">
                        <FormControl className="auto-input" disabled
                            {...getFieldProps('code', {
                                initialValue: status==="add"?'' : archivesInfo.code,
                            })}

     
                        />
                        <FormError errorMsg={getFieldError('code')} />
                    </div>
                </FormItem> 


                <FormItem className="auto-form-item">
                    <Label className="auto-label">上级分类</Label>
                    <div className="auto-content">
                        <Select disabled
                            {...getFieldProps('lasttype', {
                                initialValue: status === "add" ? archivesInfo.pname : archivesInfo.lasttype,
                                rules: [{
                                    message: '请选择分类级别',
                                }],

                            }
                            )}
                        >
                        </Select>
                        <FormError errorMsg={getFieldError('lasttype')} />
                    </div>
                </FormItem>



                <FormItem className="auto-form-item">
                    <Label className="auto-label">分类级别</Label>
                    <div className="auto-content">
                        <Select disabled
                            {...getFieldProps('typelv', {
                                // initialValue: status === 'add' ? "" : String(rowData.cusname)
                                initialValue: status === "add"? (parseInt(archivesInfo.typelv) + 1) + "" : archivesInfo.typelv,
                                rules: [{

                                    message: '只能添加四级',
                                }],

                            }
                            )}
                        >
                            <Option value={'0'}>分类</Option>
                            <Option value={'1'}>品类</Option>
                            <Option value={'2'}>部类</Option>
                            <Option value={'3'}>大类</Option>
                            <Option value={'4'}>细类</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('typelv')} />
                    </div>
                </FormItem>



                <FormItem className="auto-form-item">
                    <Label className="auto-label red-star">产品名称</Label>
                    <div className="auto-content">
                        <FormControl className="auto-input" disabled={disabled}
                            {...getFieldProps('pname', {
                                initialValue: status === "add" ? '' : archivesInfo.pname,
                                rules: [{
                                    required: true,
                                    message: '请输入产品名称'
                                }],
                            })}
                        />
                        <FormError errorMsg={getFieldError('pname')} />
                    </div>
                </FormItem>



                {/* <FormItem className="auto-form-item">
                    <Label className="auto-label">次级</Label>
                    <div className="auto-content">
                        <FormControl className="auto-input" disabled
                                     {...getFieldProps('level_value', {
                                         initialValue: archivesInfo.level_value || '',
                                         rules: [{
                                           
                                             message: '请输入产品名称'
                                         }],
                                     })}
                        />
                        <FormError errorMsg={getFieldError('level_value')}/>
                    </div>
                </FormItem> */}



                {/* <FormItem className="auto-form-item">
                    <Label className="auto-label">分类级别</Label>
                    <div className="auto-content">
                        <Select disabled
                            {...getFieldProps('typelv', {
                                // initialValue: status === 'add' ? "" : String(rowData.cusname)
                                initialValue: status === "add" ? (parseInt(archivesInfo.typelv) + 1) + "" : archivesInfo.typelv,
                                rules: [{

                                    message: '请选择分类级别',
                                }],

                            }
                            )}
                        >
                            <Option value={'1'}>品类</Option>
                            <Option value={'2'}>部类</Option>
                            <Option value={'3'}>大类</Option>
                            <Option value={'4'}>细类</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('typelv')} />
                    </div>
                </FormItem> */}

                {/* <FormItem className="auto-form-item">
                    <Label className="auto-label red-star">组织机构</Label>
                    <div className="auto-content">
                        <RefCommon
                            disabled={disabled}
                            // rowData={typeof archivesInfo !== 'undefined' && archivesInfo}
                            // btnFlag={typeof btnFlag !== 'undefined' && btnFlag}
                            type={1}
                            title={'组织机构'}
                            refPath={'/pap_basedoc/common-ref/'
                            }
                            param={{
                                refCode: 'neworganizition_tree'
                            }}
                            {...getFieldProps('orgId', {
                                initialValue: JSON.stringify({
                                    refname: (typeof archivesInfo !== 'undefined' && archivesInfo['orgName']) || '',
                                    refpk: (typeof archivesInfo !== 'undefined' && archivesInfo['orgId']) || ''
                                }),
                            })}

                        />
                        <FormError errorMsg={getFieldError('orgId')} />
                    </div>
                </FormItem>*/}

                <FormItem className="auto-form-item">
                    <Label className="auto-label red-star">是否启用</Label>
                    <div className="auto-content">
                        <Select disabled={disabled}
                            {...getFieldProps('isEnable', {
                                initialValue: status === "add" ? '' : archivesInfo.isEnable,
                                rules: [{
                                    required: true, message: '请选择是否启用',
                                }],

                            }
                            )}
                        >
                            <Option value={'1'}>是</Option>
                            <Option value={'2'}>否</Option>
                        </Select>
                        <FormError errorMsg={getFieldError('isEnable')} />
                    </div>
                </FormItem> 

                <FormItem className="auto-form-item">
                    <Label className="auto-label">分类说明</Label>
                    <div className="auto-content">
                        <FormControl className="auto-input" disabled={disabled}
                            {...getFieldProps('typemap', {
                                initialValue: status === "add" ? '' : archivesInfo.typemap,
                                rules: [{
                                    message: '分类说明'
                                }],
                            })}
                        />
                        <FormError errorMsg={getFieldError('typemap')} />
                    </div>
                </FormItem>
                
            </Form>


        )
    }
}

export default Form.createForm()(TreeForm);

