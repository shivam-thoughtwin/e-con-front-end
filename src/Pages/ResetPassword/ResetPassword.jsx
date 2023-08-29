import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
// import { forgotPassword } from "../../Components/ApiCalls/apis";
import { resetPasswordSchema } from "../../Components/Schemas";
import "./style.scss";
// import { useNavigate } from "react-router-dom";
const initialValues = {
  new_password: "",
  confirm_password: "",
};
// const getURL = () => {
//   // alert("The URL of this page is: " + window.location.href);
//   window.location.href = process.env.REACT_APP_API_URL;
//   console.log("URL", window.location.href);
// };
const ResetPassword = () => {
  //   const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: resetPasswordSchema,
      onSubmit: async (values, action) => {
        // await forgotPassword(values);
        console.log("Values", values);
        action.resetForm();
      },
    });

  return (
    <section className="resetPassword_wrapper">
      <Container>
        <Row>
          <Col lg={6} className="img-Container">
            <h2 style={{ textAlign: "center" }}>Reset Your Password?</h2>
            <h6 style={{ textAlign: "center" }}>
              Enter the password to login to your account.
            </h6>
            <img
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
              alt="password"
            />
          </Col>
          <Col lg={6}>
            <h3>RESET PASSWORD</h3>
            <hr />
            <Form onSubmit={handleSubmit} className="form">
              <Form.Group>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type="password"
                  className="text"
                  autoComplete="off"
                  name="new_password"
                  placeholder="New Password"
                  value={values?.new_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.new_password && touched.new_password ? (
                  <p className="error">{errors.new_password}</p>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  className="text"
                  autoComplete="off"
                  name="confirm_password"
                  placeholder="Confirm Password"
                  value={values?.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="error">{errors.confirm_password}</p>
                ) : null}
              </Form.Group>

              <Button className="reset-button" type="submit">
                Reset Password
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ResetPassword;
