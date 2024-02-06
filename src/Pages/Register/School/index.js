import React, { useState } from "react";
import { Card, Form, Input, Button, Row, Col } from "antd";
import "./index.scss"; // Import your CSS file
import axios from "axios";


const SchoolRegister = () => {
  const [formData, setFormData] = useState({
    schoolName: "",
    schoolAddress: "",
    email : "",
    password: "",
  });

  const handleChange = (fieldName, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const onFinish = () => {
    let data = {...formData, schoolAdminEmail : formData.email};
   
    axios.post(`http://192.168.2.127:3001/registerschooladmin`, data) // Change URL to your API endpoint
      .then(response => {
        console.log('Form submitted successfully:', response.data);
        // Optionally, perform any additional actions upon successful submission
      })
      .catch(error => {
        console.error('Error submitting form:', error);
        // Optionally, handle errors or display error messages to the user
      });
  };

  return (
    <div className="register-container">
      <Card
        className="register-card"
        title="Onboard school"
        bordered={false}
      >
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={24}>
            <Col span={24}>
              <Form.Item
                label="School Name"
                name="schoolName"
                rules={[
                  { required: true, message: "Please input your school name!" },
                ]}
              >
                <Input
                  value={formData.schoolName}
                  onChange={(e) => handleChange("schoolName", e.target.value)}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email address!",
                  },
                ]}
              >
                <Input
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </Form.Item>
            </Col>
          
          </Row>
          <Row gutter={24}>
            <Col span={24}>
            <Form.Item
              label="School address"
              name="schoolAddress"
              rules={[
                {
                  required: true,
                  message: "Please input your school address!",
                },
              ]}
            >
              <Input
                value={formData.schoolAddress}
                onChange={(e) => handleChange("schoolAddress", e.target.value)}
              />
            </Form.Item>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject("The two passwords do not match!");
                    },
                  }),
                ]}
              >
                <Input.Password
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleChange("confirmPassword", e.target.value)
                  }
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add User
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SchoolRegister;
