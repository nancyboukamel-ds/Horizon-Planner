import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Need to import Link here too!

function RegisterComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // Added name field for a proper register form
  const [repeatPassword,setRepeatPassword]=useState('');
  const [validationError,setValidationError]=useState('');
  const [errors,setErrors]=useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Reset previous errors
    setValidationError('');
    setErrors({});

    let currentErrors={};
    let formIsValid=true;

    if(!name.trim()){
      currentErrors.name=true;
      formIsValid=false;
    }
    if(!email.trim()){
      currentErrors.email=true;
      formIsValid=false;
    }
    if(!password){
      currentErrors.password=true;
      formIsValid=false;
    }
    if (password && repeatPassword && password !== repeatPassword) {
      setValidationError("Error: The two passwords entered do not match.");
      currentErrors.password = true;
      currentErrors.repeatPassword = true;
      formIsValid = false;
    }
    if (!formIsValid && !validationError) {
      setValidationError("Error: Please fill out all required fields.");
    }
    setErrors(currentErrors);
    if (formIsValid) {
      console.log('Registration successful for:', name, email);
      setName('');
      setEmail('');
      setPassword('');
      setRepeatPassword('');
      setValidationError('Registration simulated successfully!');
    }

  };

  return (
    <div className="login-page-wrapper">
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="shadow-lg p-3 custom-card-style">
              <Card.Body>
                <div className="text-center mb-4">
                  <h3 className="mt-3">Create Account</h3>
                  <p className="text-muted">Fill out the form below</p>
                </div>
                
                <Form onSubmit={handleSubmit}>
                   {/* Name Input */}
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Your Name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      isInvalid={errors.name}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                    Name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  {/* Email Input */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      isInvalid={errors.email}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                    Email is required
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Password Input */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="********" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      isInvalid={errors.password}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                       {errors.password && password !== repeatPassword ? 'Passwords must match.' : 'Password is required.'}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Repeat Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="********" 
                      value={repeatPassword} 
                      onChange={(e) => setRepeatPassword(e.target.value)} 
                      isInvalid={errors.repeatPassword}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                       {errors.password && password !== repeatPassword ? 'Passwords must match.' : 'Please confirm your password.'}
                    </Form.Control.Feedback>
                  </Form.Group>

                  {/* Register Button */}
                  <Button variant="success" type="submit" className="w-100 mb-3" size="lg">
                    Register
                  </Button>

                  {/* Login Link: Links back to the home route (/) */}
                  <p className="text-center mt-3 mb-0">
                    Already have an account? 
                    <Link to="/" className="text-decoration-none">
                        Login here
                    </Link>
                  </p>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterComponent;