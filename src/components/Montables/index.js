import React, { useState } from "react";
import { Container, Row, CardDeck, Card, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addCar } from '../../Action'

const Montables = (props) => {

    const { listOfProduct } = props

    const handlerAgregate = (product) => {
        const policyObj = {
            name: product.name,
            key: product.key,
            marca: product.marca,
            url: product.url,
            price: parseInt(product.price),
            stock: parseInt(product.stock)
        }
        props.addCar(policyObj)
    }

    return (
        <div>
            <Container>
                <h2>Montables</h2>
                <Row>
                    {
                        listOfProduct.map((montable) => {
                            if (montable.name === 'Montable') {
                                return (
                                    <Col sm="4" key={montable.key}>
                                        <CardDeck>
                                            <Card>
                                                <Card.Img variant="top" src={montable.url} style={{ width: '345px', height: '300px' }} />
                                                <Card.Body>
                                                    <Card.Title>Marca: {montable.marca}</Card.Title>
                                                    <Card.Text>
                                                        ${montable.price}.00
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Button
                                                            variant="warning"
                                                            onClick={() => handlerAgregate(montable)}
                                                        >Añadir al Carrito</Button>
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </CardDeck>
                                    </Col>
                                )
                            }

                        })

                    }
                </Row>
            </Container>
        </div>
    )

}

const stateAProps = (state) => { //mapStateToProps nombre común para esta función
    return {
        listOfProduct: state.productList
    }
}

export default connect(stateAProps, {addCar})(Montables)