
let pdSER = new ProductService();
let ProductList = [];
let cart = [];
getLocalStorage();

let layDanhSach = () => {
  pdSER
    .layDS()
    .then((result) => {
      console.log(result.data);
      ProductList = [...result.data];
      listSanPham(ProductList);
    })
    .catch((error) => {
      console.log(error);
    });
};
let listSanPham = (mang) => {
  let content = "";
  let count = 1;
  mang.map((sp) => {
    content += `
        <tr>
                <td>${count}</td>
                <td>${sp.name}</td>
                <td>${sp.price}</td>
                <td>${sp.screen}</td>
                <td>${sp.backCamera}</td>
                <td>${sp.frontCamera}</td>
                <td><img src="${sp.img}" alt="" style="width:45px;height:auto;"></td>
                <td>${sp.desc}</td>
                <td>${sp.type}</td>
                <td>
                    <button onclick="addToCart(${sp.id})" class="btn btn-info">ADD TO CART</button>
                </td>
            </tr>
`;
    count++;
  });
  document.getElementById("tblDanhSachSP").innerHTML = content;
};
layDanhSach();
let onchangeType = () => {
  let x = document.getElementById("selectType").value;
  console.log(x);
  let array = [];
  let array2 = [];
  pdSER
    .layDS()
    .then((result) => {
      console.log(result.data);
      array = result.data;
      array.map((sp, index) => {
        if (sp.type == x) {
          array2.push(array[index]);
        }
      });
      if (array2.length == 0) array2 = array;
      console.log(array2);
      listSanPham(array2);
    })

    .catch((error) => {
      console.log(error);
    });
};
let addToCart = (id) => {
  let vitri = timVT(id);
  let product = ProductList[vitri];
  // if (cart.length == 0) {
  //   let cartItem = new CartItem(product);
  //   cart.push(cartItem);
  // } else {
  //   cart.map((item) => {
  //     if (item.product.id == id) {
  //       item.quantity++;
  //     } else if (item.product.id != id) {
  //       let cartItem = new CartItem(product);
  //       cart.push(cartItem);
  //     }
  //   });
  // }
  const even = (item) => item.product.id == id;
  if(cart.some(even)){
    cart.map((item) =>{
      if (item.product.id == id)
      item.quantity++;
    })
  }
  else{
    let cartItem = new CartItem(product);
        cart.push(cartItem);
  }
  console.log(cart);
  

  setLocalStorage(cart);
};
let timVT = (id) => {
  // console.log(id);
  let vitri = -1;
  ProductList.map((item, index) => {
    // console.log(item.id);
    if (item.id == id) vitri = index;
  });
  return vitri;
};
function setLocalStorage(mang) {
  localStorage.setItem("DSSP", JSON.stringify(mang));
}
function getLocalStorage() {
  if (localStorage.getItem("DSSP") != null) {
    cart = JSON.parse(localStorage.getItem("DSSP"));
    // listCart(cart);
    console.log(cart);
    console.log();
  }
}
let listCart = (mang) => {
  let content = "";
  let count = 1;
  mang.map((sp) => {
    content += `
      <tr>
      <td>${count}</td>
      <td>${sp.product.name}</td>
      <td>${sp.product.price}</td>
      <td>${sp.product.screen}</td>
      <td>${sp.product.backCamera}</td>
      <td>${sp.product.frontCamera}</td>
      <td><img src="${sp.product.img}" alt="" style="width:45px;height:auto;"></td>
      <td>${sp.product.desc}</td>
      <td>${sp.product.type}</td>
  </tr>
      `;
    count++;
  });
  document.getElementById("tblDanhSachSP2").innerHTML = content;
};

