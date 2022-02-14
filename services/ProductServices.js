export default class ProductServices {
    constructor() {
    }
    getProduct() {
        return axios({
            method: 'get',
            url: 'https://62060a0b161670001741beb6.mockapi.io/sp',
        });
    }
    addProduct(product) {
        return axios({
            method: 'post',
            url: 'https://62060a0b161670001741beb6.mockapi.io/sp',
            data: product,
        });
    }
    deleteProduct(id) {
        return axios({
            method: 'delete',
            url: `https://62060a0b161670001741beb6.mockapi.io/sp/${id}`,
        });
    }
    watchProduct(id) {
        return axios({
            method: 'get',
            url: `https://62060a0b161670001741beb6.mockapi.io/sp/${id}`,
        });
    }
    updateProduct(id, product) {
        return axios({
            method: 'put',
            url: `https://62060a0b161670001741beb6.mockapi.io/sp/${id}`,
            data: product,
        });
    }
}