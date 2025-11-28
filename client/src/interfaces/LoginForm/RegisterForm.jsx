import { signUp } from "aws-amplify/auth";
import { useState } from "react";
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { Link,useNavigate} from 'react-router-dom';


export default function RegisterComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [repeatPassword, setRepeatPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');

  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    setError('');
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    if (password !== repeatPassword) newErrors.repeatPassword = 'Passwords must match';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const out = await signUp({
        username: email,
        password,
        attributes: {
          email,
          name,
        }
      });

      console.log("Sign-up success:", out);
      alert("Registration successful! Check your email for verification code.");
      navigate('/confirm');

    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }

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

                {error && <Alert variant="danger">{error}</Alert>}

                <Form onSubmit={handleRegister} noValidate>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                      type="text" 
                      placeholder="Your Name" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      isInvalid={!!errors.name}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                      type="email" 
                      placeholder="name@example.com" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                      isInvalid={!!errors.email}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="********" 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      isInvalid={!!errors.password}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.password}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formRepeatPassword">
                    <Form.Label>Repeat Password</Form.Label>
                    <Form.Control 
                      type="password" 
                      placeholder="********" 
                      value={repeatPassword} 
                      onChange={(e) => setRepeatPassword(e.target.value)} 
                      isInvalid={!!errors.repeatPassword}
                      required
                    />
                    <Form.Control.Feedback type='invalid'>
                      {errors.repeatPassword}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Button variant="success" type="submit" className="w-100 mb-3" size="lg">
                    Register
                  </Button>

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
