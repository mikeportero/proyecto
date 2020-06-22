import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormaPolizas from './FormaPolizas'
import ListaPolizas from '../ListaPolizas'

class Polizas extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="6">
                            <FormaPolizas />
                        </Col>
                        <Col sm="6">
                            <ListaPolizas />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Polizas