import React, { useState } from "react";
import { Container, Table, Row, Image, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { deleteCar } from '../../Action'

const Carrito = (props) => {

    const { listOfBuy } = props

    const handleDelete = (name, key, price) => {
        props.deleteCar(name, key, price)
    }

        return (
            <div>
                <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfBuy.map((buy, index) => {
                                return (
                                    <tr>
                                        <td><Image style={{ width: '100px', height: '100px' }} src={buy.url} /></td>
                                        <td>{buy.name}</td>
                                        <td>{buy.marca}</td>
                                        <td>{buy.price}</td>
                                        <td><Button
                                            variant="danger"
                                            onClick={() => handleDelete(buy.name, buy.key, buy.price)}
                                        >Quitar Producto</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <Row>
                <Col sm="4">
                    Total:
                </Col>
                <Col sm="4">
                    {
                        props.total
                    }
                </Col>
            </Row>
            </Container>

            </div>
        )
}

const stateAProps = (state) => { //mapStateToProps nombre común para esta función
    return {
        listOfBuy: state.carList,
        total: state.totalAmount
    }
}

export default connect(stateAProps, { deleteCar })(Carrito)