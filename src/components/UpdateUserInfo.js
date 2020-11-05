import React from 'react';
import { Form, Input, Button, Tooltip, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../constants';



class UpdateUserInfo extends React.Component {
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    handleSubmit = e => {
        e.preventDefault();   //取消ajax http call

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                fetch(`${API_ROOT}/user`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        user_name: document.cookie,
                        nick_name: values.newNickName
                    }),
                })
                    .then((response) => {
                        console.log(response);
                        if (response.ok) {
                            return response.text();
                        }
                        throw new Error(response.statusText);
                    })
                    .then((data) => {
                        console.log(data);
                        message.success('Update succeed!');
                    })
                    .catch((err) => {
                        console.error(err);
                        message.error('Update failed.');
                    });
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    //先在confirm password 輸入的校驗
    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('newNickName')) {
            callback('Two Nicknames that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    //在 password輸入的校驗
    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirmNickname'], { force: true });
        }
        callback();
    };

    render() {
        // this.props.form 是因為 最下面用Antd的form裡面的create方法包裝成新的object export出去
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="register">
                <Form.Item
                    label="Username">
                    {document.cookie}
                </Form.Item>
                <Form.Item label="New Nickname" hasFeedback>
                    {getFieldDecorator('newNickName', {
                        rules: [
                            {
                                required: true,
                                message: 'New Nickname!',
                            },
                            {
                                validator: this.validateToNextPassword,
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item label="Confirm Nickname" hasFeedback>
                    {getFieldDecorator('confirmNickname', {
                        rules: [
                            {
                                required: true,
                                message: 'Please confirm your New Nickname!',
                            },
                            {
                                validator: this.compareToFirstPassword,
                            },
                        ],
                    })(<Input onBlur={this.handleConfirmBlur} />)}
                </Form.Item>
                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form.Item>
            </Form>
        );
    }
}
// HOC: From.create() 返回了一個function這個func接收了一個組件 RegistrationForm 並且返回了新的組件 Register
export const UpdateUser = Form.create({ name: 'register' })(UpdateUserInfo);