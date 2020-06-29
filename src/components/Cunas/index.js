import React, { useState } from "react";
import { Container, Row, CardDeck, Card, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addCar } from '../../Action'

const Cunas = (props) => {

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
                <h2>Cunas</h2>
                <Row>
                    {
                        listOfProduct.map((cuna) => {
                            if (cuna.name === 'Cuna') {
                                return (
                                    <Col sm="4" key={cuna.key}>
                                        <CardDeck>
                                            <Card>
                                                <Card.Img variant="top" src={cuna.url} style={{ width: '345px', height: '300px' }} />
                                                <Card.Body>
                                                    <Card.Title>Marca: {cuna.marca}</Card.Title>
                                                    <Card.Text>
                                                        ${cuna.price}.00
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Button
                                                            variant="warning"
                                                            onClick={() => handlerAgregate(cuna)}
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

export default connect(stateAProps, {addCar})(Cunas)