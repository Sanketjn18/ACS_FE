// ForgetPassword.js
import React, { useState } from 'react';
import { Card, Form, Input, Button, message } from 'antd';
import './ForgetPassword.scss'; // Import your SCSS file
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('your-api-endpoint', { email });
      // Handle successful submission
      console.log('Submission success:', response.data);
      message.success('New Password will be sent to your email');
    } catch (error) {
      // Handle error responses or validation errors from the server
      console.error('Submission error:', error.response.data);
      message.error(error.response.data.message || 'An error occurred');
    }
  };

  return (
    <div className="forget-password-container">
      <Card className="forget-password-card" title="Forget Password" bordered={false}>
        <Form
          name="forget-password"
          initialValues={{ remember: true }}
          onFinish={handleSubmit}
          layout="vertical"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input type="email" value={email} onChange={handleEmailChange} />
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

export default ForgetPassword;
