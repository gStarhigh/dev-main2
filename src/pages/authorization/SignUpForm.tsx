import { useState } from "react";
import { Link } from "react-router-dom";

// Styles

import {
  Form,
  Button,
  Image,
  Col,
  Row,
  Container
} from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    password1: "",
    password2: "",
  });
  const { firstName, lastName, password1, password2 } = signUpData;


  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
        history.push("/");
    } catch (err) {
     
    }
  };


  
  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container>
          <h1>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="firstName">
              <Form.Label className="d-none">firstName</Form.Label>
              <Form.Control
                
                type="text"
                placeholder="Förnamn"
                name="firstName"
                value={firstName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Label className="d-none">lastName</Form.Label>
              <Form.Control
                
                type="text"
                placeholder="Efternamn"
                name="lastName"
                value={lastName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Container>

        <Container className={`mt-3 `}>
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2`}
      >
        <Image
          
          src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero2.jpg"}
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;