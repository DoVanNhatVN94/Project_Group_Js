class ProductService {
    constructor() {
        this.mang = [];
    }
    layDS = () => {
        return axios({
            // trả về đối tượng của AXIOS
            method: 'get',
            url: 'https://62060a0b161670001741beb6.mockapi.io/sp',
            // responseType: 'stream'
        });
    }
    themSP = (sp) => {
        //Trả về đối tượng axios
        return axios({
            method: 'post',
            url: 'https://62060a0b161670001741beb6.mockapi.io/sp',
            data: sp
        });
    }
    xoaSP = (id) => {
        return axios({
            method: 'delete',
            url: `https://62060a0b161670001741beb6.mockapi.io/sp/${id}`,

        });
    }
    layID = (id) => {
        return axios({
            method: 'get',
            url: `https://62060a0b161670001741beb6.mockapi.io/sp/${id}`,

        });
    }
    capNhap=(id,sp)=>{
        return axios({
            method: 'put',
            url: `https://62060a0b161670001741beb6.mockapi.io/sp/${id}`,
            data: sp
        });
    }
}