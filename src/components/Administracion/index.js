import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import FormaAdministracion from './FormaAdministracion'
import ListaAdministracion from '../ListaAdministracion'

class Administracion extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col sm="4">
                            <FormaAdministracion />
                        </Col>
                        <Col sm="8">
                            <ListaAdministracion />
                        </Col>
                    </Row>
                </Container>

            </div>
        )
    }
}

export default Administracion