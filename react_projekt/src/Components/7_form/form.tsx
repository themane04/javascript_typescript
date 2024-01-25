import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";

function MyForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    function containsUpper(password: string) {
        for (let i = 0; i < password.length; i++) {
            if (password[i] === password[i].toUpperCase() && password[i] !== password[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    function containsLower(password: string) {
        for (let i = 0; i < password.length; i++) {
            if (password[i] === password[i].toLowerCase() && password[i] !== password[i].toUpperCase()) {
                return true;
            }
        }
        return false;
    }

    const validatePassword = (password: string) => {
        return password.length >= 8
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (validateEmail(email) && validatePassword(password)) {

        } else {

        }
        setSubmitted(true);
    };

    return (
        <Form onSubmit={handleSubmit} className="col-4 offset-4 mt-4">
            <Row className="mb-2">
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    isInvalid={submitted && !validateEmail(email)}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    isInvalid={submitted && !validatePassword(password)}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">It has to be longer than 8 characters</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="col-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out"/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default MyForm;
