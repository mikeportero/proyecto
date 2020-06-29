export const createProduct = (product) => {
    return {
        type: 'CREATE_PRODUCT',
        payload: {
            name: product.name,
            marca: product.marca,
            price: product.price,
            stock: product.stock,
            url: product.url
        }
    }
}

export const deleteProduct = (name, marca) => {
    return {
        type: 'DELETE_PRODUCT',
        payload: {
            name: name,
            marca: marca
        }
    }
}

export const editProduct = (product) => {
    return {
        type: 'EDIT_PRODUCT',
        payload: {
            name: product.name,
            marca: product.marca,
            price: product.price,
            stock: product.stock,
            url: product.url,
            key: product.key
        }
    }
}

export const addCar = (product) => {
    return {
        type: 'ADD_TO_CAR',
        payload: {
            name: product.name,
            marca: product.marca,
            price: product.price,
            stock: product.stock,
            url: product.url,
            key: product.key
        }
    }
}

export const deleteCar = (name, key, price) => {
    return {
        type: 'DELETE_TO_CARD',
        payload: {
            name: name,
            key: key,
            price: price
        }
    }
}