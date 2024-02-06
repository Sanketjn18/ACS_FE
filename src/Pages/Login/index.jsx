import React, { useState } from 'react';
import { Card, Form, Input, Button, message } from 'antd';
// import 'antd/dist/antd.css';
import './index.scss'; // Import your CSS file
import axios from 'axios';

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${process.env.API_URL}/login`, formData);
      // Handle successful login
      console.log('Login success:', response.data);
      message.success('Login successful');
    } catch (error) {
      // Handle error responses or validation errors from the server
      console.error('Login error:', error.response.data);
      message.error(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card" title="Login" bordered={false}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" name="email" value={formData.email} onChange={handleChange}/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password name="password" value={formData.password} onChange={handleChange}/>
          </Form.Item>

          <Form.Item>
            <a href="/forgotpassword">Forgot password?</a>
          </Form.Item>
          <Form.Item>
            <a href="/register/school">Register as School</a>
          </Form.Item>
          <Form.Item>
            <a href="/register/user">Register as Teacher</a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
