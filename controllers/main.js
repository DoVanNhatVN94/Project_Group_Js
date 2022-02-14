// let data = [
//   {
//     name: "iphoneX",
//     price: "1000",
//     screen: "screen 68",
//     backCamera: "2 camera 12 MP",
//     frontCamera: "7 MP",
//     img: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
//     desc: "Thiết kế mang tính đột phá",
//     type: "iphone",
//   },
//   {
//     name: "Samsung Galaxy M51 ",
//     price: "$35",
//     screen: "screen 69",
//     backCamera: " Chính 64 MP & Phụ 12 MP, 5 MP, 5 MP",
//     frontCamera: " 32 MP",
//     img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
//     desc: '"Thiết kế đột phá, màn hình tuyệt đỉnh"',
//     type: "Samsung",
//   },
//   {
//     name: "Samsung Galaxy M22",
//     price: "45000",
//     screen: "screen 70",
//     backCamera: "Chính 12 MP & Phụ 64 MP, 12 MP",
//     frontCamera: " 32 MP",
//     img: "https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg",
//     desc: "Thiết kế mang tính đột phá",
//     type: "Samsung",
//   },
//   {
//     name: "Iphone 11",
//     price: "1000",
//     screen: "screen 54",
//     backCamera: "Camera: Chính 12 MP & Phụ 64 MP, 12 MP",
//     frontCamera: "32 MP",
//     img: "https://didongviet.vn/pub/media/catalog/product//i/p/iphone-11-pro-max-256gb-didongviet_23.jpg",
//     desc: "Thiết kế đột phá, màn hình tuyệt đỉnh",
//     type: "Iphone",
//   },
// ];


let pdSER = new ProductService();
let ProductList = [];
let cart = [];
getLocalStorage();
showNumberCart(cart.length);

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
  //mockapi loi?
  // listSanPham(data);
};
let listSanPham = (mang) => {
  let content = "";
  mang.map((sp) => {
    content += `
    <div class="col-6 col-lg-4">
    <div class="card_bg">
        <div class="card">
        <div class="card_type"><span>${sp.type}</span></div>
            <div class="card_img">
                <img src="${sp.img}" class="card-img-top" alt="..." width="324" height="200">
            </div>
            <div class="card-body">
                <h5 class="card_name" id="card_name">${sp.name}</h5>
                <p class="card_text">Screen: "${sp.screen}"</p>
                                    <p class="card_text">BackCamera: "${sp.backCamera}"</p>
                                    <p class="card_text">FrontCamera: "${sp.frontCamera}"    </p>
                                    <p class="card_text" id="card_text">Mô tả : "${sp.desc}" .</p>
                <span>Gia: </span><p class="card_price">${sp.price} VND</p>
                <button class="btn btn-primary" onclick="addToCart('${sp.id}')">ADD</button>
            </div>
        </div>
    </div>
</div>
`;
    count++;
  });
  document.getElementById("content").innerHTML = content;
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
      array = [...result.data];
      array.map((sp, index) => {
        if (sp.type == x) {
          array2.push(array[index]);
        }
      });
      if (array2.length == 0) {
        array2 = [...array];
        alert(`"không có ${x}"`);
      }

      listSanPham(array2);
    })
    .catch((error) => {
      console.log(error);
    });

  //mockapi loi?
  // array = [...data];
  // array.map((sp, index) => {
  //   if (sp.type == x) {
  //     array2.push(array[index]);
  //   }
  // });
  // if (array2.length == 0) {
  //   array2=[...array];
  //   alert(`"không có ${x}"`);
  // }

  // listSanPham(array2);
};
let addToCart = (id) => {
  let vitri = timVT(id);
  console.log("id: ",id);
  console.log("vt: ",vitri);
  
  let productCart = {...ProductList[vitri]};
  console.log("product: ",productCart);

  if(cart.some((item)=>{
    if(item.product.id == id)
    return true;
  })){
      cart.map((item) => {
        if (item.product.id == id) item.quantity++;
      })}
      else {
          let cartItem = new CartItem(productCart);
          cart.push(cartItem);
        }
        console.log(cart);

  setLocalStorage(cart);
  showNumberCart(cart.length);
};

// * Tìm vị trí của product * 
let timVT = (id) => {
  console.log(id);
  let vitri = -1;
  ProductList.map((item, index) => {
    console.log(item.id);
    if (item.id == id) vitri = index;
  });
  return vitri;
};

// Hiện Number trên icon shop cart
function showNumberCart(number){
document.getElementById("count").innerHTML = number;
}



function listCart(mang){
  let content = "";
  let count = 1;
  mang.map((sp) => {
    content += `
    <div class="cart-item">
    <div class="cart-img">
      <img src="${sp.product.img}" alt="">
    </div>
    <strong class="name">${sp.product.name}</strong>
    <span class="qty-change">
  <div>
    <button class="btn-qty" onclick="qtyChange(this,'sub')"><i class="fas fa-chevron-left"></i></button>
    <p class="qty">1</p>
    <button class="btn-qty" onclick="qtyChange(this,'add')"><i class="fas fa-chevron-right"></i></button>
  </div></span>
    <p class="price">$ ${sp.product.price}</p>
    <button onclick="removeItem(this)"><i class="fas fa-trash"></i></button>
  </div>
      `;
    count++;
  });
  document.getElementsByClassName("cart-items")[0].innerHTML = content;
};

function sideNav(e){
  let t=document.getElementsByClassName("side_nav")[0],
  n=document.getElementsByClassName("cover")[0];
t.style.right=e?"0":"-100%",n.style.display=e?"block":"none"}



// * setLocalStorage * 
function setLocalStorage(mang) {
  localStorage.setItem("DSSP", JSON.stringify(mang));
}

// * getLocalStorage
function getLocalStorage() {
  if (localStorage.getItem("DSSP") != null) {
    cart = JSON.parse(localStorage.getItem("DSSP"));
    listCart(cart);
    console.log("Mang cart",cart);
    console.log(document.getElementsByClassName("cart-items")[0]);
  }
}