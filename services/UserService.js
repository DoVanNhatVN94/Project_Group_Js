export default class UserService {
  constructor() {}
  getProduct() {
    return axios({
      method: "get",
      url: "https://62060a0b161670001741beb6.mockapi.io/sp",
    });
  }
}
