class ProductService {
    constructor() {
        this.mang = [];
    }
    layDS = () => {
        return axios({
            // trả về đối tượng của AXIOS
            method: 'get',
            url: 'https://61ebb6137ec58900177cdd3d.mockapi.io/Product',
            // responseType: 'stream'
        });
    }
    themSP = (sp) => {
        //Trả về đối tượng axios
        return axios({
            method: 'post',
            url: 'https://61ebb6137ec58900177cdd3d.mockapi.io/Product',
            data: sp
        });
    }
    xoaSP = (name) => {
        return axios({
            method: 'delete',
            url: `https://61ebb6137ec58900177cdd3d.mockapi.io/Product/${name}`,

        });
    }
    layID = (id) => {
        return axios({
            method: 'get',
            url: `https://61ebb6137ec58900177cdd3d.mockapi.io/Product/${id}`,

        });
    }
    capNhap=(id,sp)=>{
        return axios({
            method: 'put',
            url: `https://61ebb6137ec58900177cdd3d.mockapi.io/Product/${id}`,
            data: sp
        });
    }
}