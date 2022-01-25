let pdSER = new ProductService();

let layDanhSach = () => {
    pdSER.layDS()
        .then((result) => {
            console.log(result.data);
            hienThi(result.data);
            pdSER.mang = result.data;
        })
        .catch((error) => {
            console.log(error);
        });

}
let hienThi = (mang) => {
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
                    <button class="btn btn-danger" onclick="xoaSanPham('${sp.name}')">Xóa</button>
                    <button class="btn btn-info" data-toggle="modal"
                    data-target="#myModal" onclick="xemChiTiet('${sp.name}')">Xem</button>
                </td>
            </tr>
`;
        count++;
    });
    document.getElementById("tblDanhSachSP").innerHTML = content;
}
layDanhSach();
let onchangeType= ()=>{
    let x = document.getElementById("selectType").value;
    console.log(x);
    let array=[];
    let array2=[];
    pdSER.layDS()
    .then((result) => {
        console.log(result.data);
        array = result.data;
        array.map((sp,index)=>{
            if(sp.type==x)
            array2.push(array[index]);
        });
        console.log(array2);
        hienThi(array2);
        
    })
    .catch((error) => {
        console.log(error);
    });
}