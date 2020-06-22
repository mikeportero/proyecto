import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";

import ListaReclamos from '../ListaReclamos'
import FormaReclamos from './FormaReclamos'

class Reclamos extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="6">
                            <FormaReclamos />
                        </Col>
                        <Col sm="6">
                            <ListaReclamos />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Reclamos