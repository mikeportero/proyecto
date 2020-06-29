import { combineReducers } from 'redux'

const product = {
    name: '',
    marca: '',
    price: 0,
    stock: 0,
    key: 0,
    url: ''
}

const marketList = []
const initList = [
    {
        name: 'Carriola',
        marca: "D'Bebé",
        price: 1200,
        stock: 2,
        key: 1200,
        url: 'https://www.thebabyshop.com.mx/25017-home_default/carriola-ultra-compacta-de-viaje-para-bebes.jpg'
    },
    {
        name: 'Cuna',
        marca: "Zoo Baby",
        price: 1790,
        stock: 10,
        key: 1201,
        url: 'https://www.thebabyshop.com.mx/16289-home_default/cuna-corral-de-viaje-zoo-baby-.jpg'
    },
    {
        name: 'Montable',
        marca: "Correpasillo",
        price: 750,
        stock: 3,
        key: 1202,
        url: 'https://www.thebabyshop.com.mx/25501-home_default/coche-montable-correpasillos-con-baston-luz-y-sonido.jpg'
    },
    {
        name: 'Mordedera',
        marca: "Nubi",
        price: 99,
        stock: 2,
        key: 1203,
        url: 'https://www.thebabyshop.com.mx/15568-home_default/guante-mordedera-de-silicon-bebe-denticion-.jpg'
    }
]

const productReducer = (listNames = initList, action) => {
    switch (action.type) {
        case "CREATE_PRODUCT":
            return [...listNames, action.payload]
        case "DELETE_PRODUCT":
            return listNames.filter((policy) => { return policy.name !== action.payload.name })
        case "EDIT_PRODUCT":
            return listNames.map(product => {
                if (parseInt(product.key) === parseInt(action.payload.key)) {
                    return {
                        ...product, price: action.payload.price, marca: action.payload.marca,
                        stock: action.payload.stock
                    }
                };
                return product;
            })
        default:
            return listNames
    }
}

const financesReducer = (totalAmount = 0, action) => {
    switch (action.type) {
        case "ADD_TO_CAR":
            return totalAmount + action.payload.price
        case "DELETE_TO_CARD":
            return totalAmount - action.payload.price
        default:
            return totalAmount
    }
}

const marketReducer = (listOfMarket = marketList, action) => {
    switch (action.type) {
        case "ADD_TO_CAR":
            return [...listOfMarket, action.payload]
        case "DELETE_TO_CARD":
            return listOfMarket.filter((policy) => { return policy.key !== action.payload.key })
        default:
            return listOfMarket
    }

}

const nameReducer = (name = 'Tienda BEBE', action) => {
    return name
}

const productObject = (productObject = product, action) => {
    return productObject
}

export default combineReducers({
    insuranceName: nameReducer,
    productList: productReducer,
    totalAmount: financesReducer,
    carList: marketReducer,
    product: productObject
})