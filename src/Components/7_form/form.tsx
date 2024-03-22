import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, Row} from "react-bootstrap";
import {InputGroup} from "react-bootstrap";
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import {AiOutlineCheck} from 'react-icons/ai';


function MyForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [hasCapitalLetter, setHasCapitalLetter] = useState(false);
    const [hasNumber, setHasNumber] = useState(false);
    const [hasSpecialChar, setHasSpecialChar] = useState(false);
    const [hasEightLetters, setHasEightLetters] = useState(false);


    const validateEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (validateEmail(email) && validatePassword(password)) {

        } else {

        }
        setSubmitted(true);
    };

    function containsUpper(password: string) {
        for (let i = 0; i < password.length; i++) {
            if (password[i] === password[i].toUpperCase() && password[i] !== password[i].toLowerCase()) {
                return true;
            }
        }
        return false;
    }

    const validatePassword = (password: string) => {
        return password.length >= 8 && containsUpper(password);
    };

    const handlePasswordChange = (e: { target: { value: any; }; }) => {
        const newPass = e.target.value;
        setPassword(newPass);
        setHasCapitalLetter(/[A-Z]/.test(newPass));
        setHasNumber(/\d/.test(newPass));
        setHasSpecialChar(/[^A-Za-z0-9]/.test(newPass));
        setHasEightLetters(newPass.length >= 8);
    };

    const handleConfirmPasswordChange = (e: { target: { value: any; }; }) => {
        setConfirmPassword(e.target.value)
    }

    const doPasswordsMatch = () => {
        return password.length > 0 && confirmPassword.length > 0 && password === confirmPassword;
    }


    return (
        <Form onSubmit={handleSubmit} className="col-4 offset-4 mt-4">
            <Row>
                <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Row>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        style={{marginTop:"2%"}}
                        type="email"
                        placeholder="Enter email"
                        isInvalid={submitted && !validateEmail(email)}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <InputGroup>
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            isInvalid={submitted && !validatePassword(password)}
                            onChange={handlePasswordChange}
                        />
                        <InputGroup.Text
                            style={{ cursor: 'pointer', border: 0, backgroundColor: "transparent" }}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiOutlineEyeInvisible/> : <AiOutlineEye/>}
                        </InputGroup.Text>
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                        {submitted && !validatePassword(password) ? 'Invalid password.' : ''}
                    </Form.Control.Feedback>

                    <InputGroup className="mt-3">
                        <Form.Control
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Confirm Password"
                            isInvalid={submitted && !doPasswordsMatch()}
                            onChange={handleConfirmPasswordChange}
                        />
                    </InputGroup>
                    <Form.Control.Feedback type="invalid">
                        {submitted && !doPasswordsMatch() ? 'Passwords do not match.' : ''}
                    </Form.Control.Feedback>

                    <div className="p-1" style={{ textAlign: "left" }}>
                        {/* Validation messages */}
                    </div>
                </Form.Group>                <Form.Group className="col-6" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with our Terms and Conditions"/>
                </Form.Group>
            </Row>
            <Button className="mt-4" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default MyForm;
