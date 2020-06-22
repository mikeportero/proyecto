import React from "react";
import { Container, Table, Button } from "react-bootstrap";

class ListaReclamos extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Nombre</th>
                                <th>Monto</th>
                                <th>Detalle</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>2500</td>
                                <td>Cobro mas caro</td>
                                <td><Button
                                    variant="outline-secondary"
                                    onClick={this.props.eliminar}
                                >Eliminar Poliza</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>400</td>
                                <td>Ajuste Deducible</td>
                                <td><Button
                                    variant="outline-secondary"
                                    onClick={this.props.eliminar}
                                >Eliminar Poliza</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                                <td>
                                <Button
                                    variant="outline-secondary"
                                    onClick={this.props.eliminar}
                                >Eliminar Poliza</Button>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </div>
        )
    }
}

export default ListaReclamos