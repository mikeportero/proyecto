import React from "react";
import { Container, Table, Button } from "react-bootstrap";

class ListaPolizas extends React.Component {
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td><Button
                                    variant="outline-secondary"
                                    onClick={this.props.eliminar}
                                >Eliminar Poliza</Button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>

            </div>
        )
    }
}

export default ListaPolizas