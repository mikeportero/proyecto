import React, { useState } from "react";
import { Container, Row, CardDeck, Card, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux'
import { addCar } from '../../Action'

const Carriolas = (props) => {

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
                <h2>Carriolas</h2>
                <Row>
                    {
                        listOfProduct.map((carriola) => {
                            if (carriola.name === 'Carriola') {
                                return (
                                    <Col sm="4" key={carriola.key}>
                                        <CardDeck>
                                            <Card>
                                                <Card.Img variant="top" src={carriola.url} style={{ width: '345px', height: '300px' }} />
                                                <Card.Body>
                                                    <Card.Title>Marca: {carriola.marca}</Card.Title>
                                                    <Card.Text>
                                                        ${carriola.price}.00
                                                    </Card.Text>
                                                    <Card.Text>
                                                        <Button
                                                            variant="warning"
                                                            onClick={() => handlerAgregate(carriola)}
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

export default connect(stateAProps, {addCar})(Carriolas)