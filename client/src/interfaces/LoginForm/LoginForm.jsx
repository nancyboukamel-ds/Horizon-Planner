import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LoginComponent() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle login submission (e.g., API call)
    console.log('Attempting login for:', email);

  };

  return (
    <div className="login-page-wrapper"> {/* Custom wrapper for full-page centering/background */}
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="shadow-lg p-3 custom-card-style"> {/* Subtle shadow and padding */}
              <Card.Body>
                <div className="text-center mb-4">
                  
 {/* Placeholder for your logo */}
                  <h3 className="mt-3">Welcome Back!</h3>
                  <p className="text-muted">Sign in to continue</p>
                </div>
                
                <Form onSubmit={handleSubmit}>
                  {/* Email Input */}
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      required
                    />
                  </Form.Group>

                  {/* Password Input */}
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="********" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      required
                    />
                  </Form.Group>

                  {/* Remember Me & Forgot Password */}
                  <div className="d-flex justify-content-between mb-4">
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <a href="#forgot" className="small text-decoration-none">Forgot Password?</a>
                  </div>
                  
                  {/* Login Button */}
                  <Button variant="primary" type="submit" className="w-100 mb-3" size="lg">
                    Log In
                  </Button>

                  {/* Registration Link: Now points to the clean '/register' path */}
                  <p className="text-center mt-3 mb-0">
                    Don't have an account? 
                    <Link to="/register" className="text-decoration-none">
                        Register here
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

export default LoginComponent;