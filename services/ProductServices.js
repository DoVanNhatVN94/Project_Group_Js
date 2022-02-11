export default class ProductServices {
    constructor() {
    }
    getProduct() {
        return axios({
            method: 'get',
            url: 'https://61ebb6137ec58900177cdd3d.mockapi.io/Product',
        });
    }
    addProduct(product) {
        return axios({
            method: 'post',
            url: 'https://61ebb6137ec58900177cdd3d.mockapi.io/Product',
            data: product,
        });
    }
    deleteProduct(id) {
        return axios({
            method: 'delete',
            url: `https://61ebb6137ec58900177cdd3d.mockapi.io/Product/${id}`,
        });
    }
    watchProduct(id) {
        return axios({
            method: 'get',
            url: `https://61ebb6137ec58900177cdd3d.mockapi.io/Product/${id}`,
        });
    }
    updateProduct(id, product) {
        return axios({
            method: 'put',
            url: `https://61ebb6137ec58900177cdd3d.mockapi.io/Product/${id}`,
            data: product,
        });
    }
}