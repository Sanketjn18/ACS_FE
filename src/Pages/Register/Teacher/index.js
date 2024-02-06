import React, { useState } from "react";
import { Card, Form, Input, Button, Select, DatePicker, Row, Col } from "antd";
import "./index.scss"; // Import your CSS file
import axios from "axios";

const { Option } = Select;

const TeacherRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    schoolName: "",
    gender: "",
    dob: null,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (fieldName, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const onFinish = () => {
    axios.post('https://example.com/api/register', formData) // Change URL to your API endpoint
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
        title="User Registration"
        bordered={false}
      >
        <Form
          name="register"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Row gutter={24}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
              </Form.Item>
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
              <Form.Item
                label="Gender"
                name="gender"
                rules={[
                  { required: true, message: "Please select your gender!" },
                ]}
              >
                <Select
                  value={formData.gender}
                  onChange={(value) => handleChange("gender", value)}
                >
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
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
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
              </Form.Item>
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
              <Form.Item
                label="Date of Birth"
                name="dob"
                rules={[
                  {
                    required: true,
                    message: "Please select your date of birth!",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  value={formData.dob}
                  onChange={(date) => handleChange("dob", date)}
                />
              </Form.Item>

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

export default TeacherRegister;
