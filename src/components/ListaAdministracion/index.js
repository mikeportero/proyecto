import React, { useState } from "react";
import { Container, Table, Button, Image, Modal, Form, Col } from "react-bootstrap";
import { connect } from 'react-redux'
import { deleteProduct } from '../../Action'
import { editProduct } from '../../Action'

const ListaAdministracion = (props) => {

    const { listOfProduct } = props
    const nameRef = React.createRef()
    const marcaRef = React.createRef()
    const priceRef = React.createRef()
    const stockRef = React.createRef()
    const keyRef = React.createRef()
    const { product } = props

    const [show, setShow] = useState(false)

    const handleDelete = (name, amount) => {
        props.deleteProduct(name, amount)
    }
    const handleClose = () => setShow(false);

    const handlerEdit = () => {

        const policyObj = {
            name: nameRef.current.value,
            marca: marcaRef.current.value,
            key: keyRef.current.value,
            price: parseInt(priceRef.current.value),
            stock: parseInt(stockRef.current.value)
        }
        props.editProduct(policyObj)
        setShow(false)
    }

    const handleShow = (policy) => {
        setShow(true);
        product.name = policy.name
        product.key = policy.key
        product.marca = policy.marca
        product.price = policy.price
        product.stock = policy.stock
        console.log(product);

    }

    return (
        <div>
            <Container>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Producto</th>
                            <th>Marca</th>
                            <th>Precio</th>
                            <th>Unidades</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listOfProduct.map((policy, index) => {
                                return (
                                    <tr>
                                        <td>{policy.key}</td>
                                        <td><Image style={{ width: '100px', height: '100px' }} src={policy.url} /></td>
                                        <td>{policy.name}</td>
                                        <td>{policy.marca}</td>
                                        <td>{policy.price}</td>
                                        <td>{policy.stock}</td>
                                        <td><Button
                                            variant="danger"
                                            onClick={() => handleDelete(policy.name, policy.amount)}
                                        >Eliminar Producto</Button>
                                        </td>
                                        <td>
                                            <Button
                                                variant="warning"
                                                onClick={() => handleShow(policy)}
                                            >Editar Producto</Button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Key</Form.Label>
                                <Form.Control ref={keyRef} defaultValue={product.key} type="name" placeholder="Ingresa Nombre del Producto" disabled/>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control ref={nameRef} defaultValue={product.name} type="name" placeholder="Ingresa Nombre del Producto" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Marca</Form.Label>
                                <Form.Control ref={marcaRef} defaultValue={product.marca} type="marca" placeholder="Ingresa Marca del Producto" />
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control ref={priceRef} defaultValue={product.price} type="price" placeholder="Ingresa Precio del Producto" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Unidades</Form.Label>
                                <Form.Control ref={stockRef} defaultValue={product.stock} type="stock" placeholder="Ingresa Unidades del Producto" />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={() => handlerEdit()}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

const stateAProps = (state) => { //mapStateToProps nombre común para esta función
    return {
        listOfProduct: state.productList,
        product: state.product
    }
}

export default connect(stateAProps, { deleteProduct, editProduct })(ListaAdministracion)