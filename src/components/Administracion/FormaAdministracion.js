import React from "react";
import { Form, Button, Col } from "react-bootstrap";
import {connect} from 'react-redux'

import {createProduct, deleteProduct} from '../../Action'

const FormaPolizas = (props) => {

    const nameRef = React.createRef()
    const marcaRef = React.createRef()
    const priceRef = React.createRef()
    const stockRef = React.createRef()
    const urlRef = React.createRef()
    const keyRef = React.createRef()


    const handlerCreate = () => {
        const policyObj = {
            name: nameRef.current.value,
            key: keyRef.current.value,
            marca: marcaRef.current.value,
            url: urlRef.current.value,
            price: parseInt(priceRef.current.value),
            stock: parseInt(stockRef.current.value)
        }
        props.createProduct(policyObj)
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Key</Form.Label>
                    <Form.Control ref={keyRef} type="key" placeholder="Ingresa la Llave" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control ref={nameRef} type="name" placeholder="Ingresa Nombre del Producto" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control ref={marcaRef} type="marca" placeholder="Ingresa Marca del Producto" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>URL</Form.Label>
                    <Form.Control ref={urlRef} type="url" placeholder="Ingresa imagen del Producto" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control ref={priceRef} type="price" placeholder="Ingresa Precio del Producto" />
                </Form.Group>
            </Form.Row>

            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Unidades</Form.Label>
                    <Form.Control ref={stockRef} type="stock" placeholder="Ingresa Unidades del Producto" />
                </Form.Group>
            </Form.Row>

            <Button
                variant="primary"
                onClick={handlerCreate}
            >
                Crear Producto
                    </Button>
        </Form>
    )
}

const mapStateToProps = (state) => {
    return {
        insuranceName: state.insuranceName
    }
}

export default connect(mapStateToProps, { createProduct, deleteProduct })(FormaPolizas)