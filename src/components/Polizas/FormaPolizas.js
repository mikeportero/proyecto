import React from "react";
import { Form, Button, Col } from "react-bootstrap";

class FormaPolizas extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="name" placeholder="Ingresa Nombre" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type="monto" placeholder="Ingresa Monto Poliza" />
                    </Form.Group>
                </Form.Row>

                <Button
                    variant="outline-secondary"
                    onClick={this.props.apiSearch}
                >
                    Crear Poliza
                    </Button>
            </Form>
        )
    }
}


export default FormaPolizas;