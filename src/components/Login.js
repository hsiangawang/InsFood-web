import React, {Component, useState} from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';
import { API_ROOT } from '../constants';

class NormalLoginForm extends Component {

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                document.cookie = values.username;
                console.log(document.cookie);
                console.log('Received values of form: ', values);
                // remember to comment it
                // this.props.handleLoginSucceed();
                fetch(`${API_ROOT}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        headers: { 'Content-Type': 'application/json' },
                        username: values.username,
                        password: values.password,
                    }),
                })
                    .then((response) => {
                        if (response.ok) {
                            return response.text();
                        }
                        throw new Error(response.stateText);
                    })
                    .then((data) => {
                        console.log(data);
                        this.props.handleLoginSucceed(data);
                        message.success('Login succeed!');
                    })
                    .catch((err) => {
                        console.error(err);
                        message.error('Login failed.');
                    });
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    {/*通過url跳轉頁面*/}
                    Or <Link to="/register">register now!</Link>
                </Form.Item>
            </Form>
        );
    }
}

export const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);