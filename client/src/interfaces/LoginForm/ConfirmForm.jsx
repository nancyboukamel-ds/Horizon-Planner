import { confirmSignUp } from "aws-amplify/auth";
import { useState } from "react";
import { Form, Button, Alert, Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function ConfirmSignUp() {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleConfirm(e) {
    e.preventDefault();
    setError("");

    try {
      await confirmSignUp({
        username: email,
        confirmationCode: code
      });

      setSuccess(true);
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
  }

  return (
    <div className="login-page-wrapper">
      <Container>
        <Row className="justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
          <Col xs={12} sm={8} md={6} lg={4}>
            <Card className="shadow-lg p-3 custom-card-style">
              <Card.Body>
                <div className="text-center mb-4">
                  <h3 className="mt-3">Confirm Your Email</h3>
                </div>

                {error && <Alert variant="danger">{error}</Alert>}
                {success && <Alert variant="success">Account confirmed!</Alert>}

                <Form onSubmit={handleConfirm}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formCode">
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter the 6-digit code"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button type="submit" variant="primary" className="w-100">
                    Confirm Account
                  </Button>
                </Form>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
