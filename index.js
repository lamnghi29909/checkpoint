// Tạo 1 mảng products để chứa các tên sản phẩm, ban đầu mảng products sẽ là 1 mảng rỗng

// - viết 1 hàm showProduct thực hiện chức năng show ra tất cả các sản phẩm trong mảng

// - kiểm tra xem mảng product có phải là mảng rỗng hay không
//   - nếu là mảng rỗng log ra "không có sản phẩm để hiển thị"
//   - nếu mảng có dữ liệu thì log ra tất cả tên sản phẩm trong mảng

// - viết 1 hàm addProduct để thực hiện việc thêm sản phẩm
//   - tên sản phẩm nhập vào từ bàn phím
//   - kiểm tra nếu tên sản phẩm nhỏ hơn 5 ký tự thì bắt nhập lại
//   - nếu dữ liệu nhập vào hợp lệ thì cho phép thêm vào mảng products

// - viết 1 hàm detailProduct thực hiện công việc show ra chi tiết của sản phẩm đó khi bấm vào

//thực hiện bằng arrow function và sử dụng destructuring trong đó


//1 
const product = [
    {
        id: 1,
        img:"giay1.png",
        title:"Giày Nike Dior x Air Jordan 1 High CN8607-002",
        cost: 290000000,
        code: "CN8607-002"
    },
    {
        id: 2,
        img:"giay1.png",
        title:"Giày Nike Dior x Air Jordan 1 High CN8607-002",
        cost: 290000000,
        code: "CN8607-002"
    },
    {
        id: 3,
        img:"giay1.png",
        title:"Giày Nike Dior x Air Jordan 1 High CN8607-002",
        cost: 290000000,
        code: "CN8607-002"
    },
];
let showProduct = (data) => {
    let product_item = document.querySelector(".san")
    product_item.innerHTML = "";
    if (product_item) {
        for (let item of data) {
            product_item.innerHTML += `
            <a href="">
                <div class="sanpham">
                    <div class="giay">
                        <img src="${item.img}" alt="">
                    </div>
                    <div class="comment">
                        <h4>${item.title}</h4>
                        <p class="cost">${item.cost}</p>
                        <p>Mã giày: ${item.code}</p> 
                    </div>
                </div>
            </a>
            `;
        }
    }
}
showProduct(product);

// 2 
if (product == "") {
    console.log("Không có sản phẩm để hiển thị");
} else {
    console.log(product[0].title)
};

// 3
let addProduct = () => {
    var dulieu = document.querySelector(".themsanpham").value;
    let a = dulieu.length
    if ( a >= 5) {
        product.push(dulieu);
    } else if (a > 0 && a < 5) {
        document.getElementById("loisanpham").style.display = "block";
    }
}
addProduct();
console.log(product);
// 4 
let detailProduct = () => {
    let a = new URLSearchParams(window.location.search).get("id")
    let sanpham = product.find("")
}