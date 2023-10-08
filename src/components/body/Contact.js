import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';





class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            telnum: "",
            email: "0",
            agree: "",
            contactType: 'Tel.',
            message: ""
        }
        this.handleIputChange = this.handleIputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleIputChange = event => {
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = values => {
        console.log(values);
        // event.preventDefault();
    }
    render() {
        document.title = "Contact";
        return (
            <div className="container">
                <div className="row row-content" style={{ paddingLeft: "300px", textAlign: "left" }}>
                    <div className="col-12">
                        <h3>Send us your Feedbck</h3>
                    </div>
                    <div className="col-12 col-md-7">
                        <Form onSubmit={values => this.handleSubmit(values)}>
                            <FormGroup row>
                                <label htmlFor="firstName" md="{22}">First Name </label>
                                <Col md="{10}">
                                    <input type="text"
                                        name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        onChange={this.handleIputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <label htmlFor="lastname" md="{2}"> Last Name</label>
                                <Col md="{10}">
                                    <input
                                        type="text"
                                        name="lastname"
                                        placeholder="Last Name"
                                        value={this.state.lastname}
                                        onChange={this.handleIputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <label htmlFor="telnum" md="{2}"> Tel Number</label>
                                <Col md="{10}">
                                    <input
                                        type="text"
                                        name="telnum"
                                        placeholder="Tel.Number "
                                        value={this.state.telnum}
                                        onChange={this.handleIputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <label htmlFor="email" md="{2}">Email</label>
                                <Col md="{10}">
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="Email "
                                        value={this.state.email}
                                        onChange={this.handleIputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input
                                                type="checkbox"
                                                name="agree"
                                                checked={this.state.agree}
                                                onChange={this.handleIputChange}
                                                className="form-control"
                                            />
                                            <strong>May we contact you?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input
                                        type="select"
                                        name="contactType"
                                        value={this.state.contactType}
                                        onChange={this.handleIputChange}
                                        className="form-control"
                                    >
                                        <br />
                                        <option>Tel.</option>
                                        <option> Email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <label htmlFor="message" md="{2}"> Message</label>
                                <Col md="{10}">
                                    <input
                                        type="message"
                                        name="message"
                                        placeholder="First Name"
                                        value={this.state.message}
                                        rews="12"
                                        onChange={this.handleIputChange}
                                        className="form-control"
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup>
                                <Col md={{ size: 10, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Send Feedbck
                                    </Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;