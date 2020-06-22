import React from "react";
import { Form, Button, Col } from "react-bootstrap";

class FormaReclamos extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="nameReclamo" placeholder="Ingresa Nombre" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type="montoReclamo" placeholder="Ingresa Monto Reclamo" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Detalle</Form.Label>
                        <Form.Control type="detalle" placeholder="Ingresa Detalle Reclamo" />
                    </Form.Group>
                </Form.Row>

                <Button
                    variant="outline-secondary"
                    onClick={this.props.apiSearch}
                >
                    Agregar Reclamo
                    </Button>
            </Form>
        )
    }
}


export default FormaReclamos;