"strict";
const btnMinus = document.querySelector(".btn-minus");
const btnPlus = document.querySelector(".btn-plus");
let inputNumber = document.querySelector("#product-quantity");
const product = document.querySelector(".product");
const galleryImg = document.querySelector(".product-thumbnail");
const productImg = document.querySelector(".product-img");
qty = "1";
btnMinus.addEventListener("click", function(e) {
    let qty = inputNumber.value;
    if (qty > 1) qty--;
    inputNumber.value = qty;
});
btnPlus.addEventListener("click", function(e) {
    let qty = inputNumber.value;
    qty++;
    inputNumber.value = qty;
});
const productImgRender = function(num = 1) {
    let html = `
       <img
            src="/src/images/image-product-${num}.jpg"
            data-img="1"
            class="product-img"
            alt=""
          />
  `;
    product.insertAdjacentHTML("beforeend", html);
};
productImgRender();
galleryImg.addEventListener("click", function(e) {
    const img = e.target.closest(".gallery-img").src;
    // let reg = /\d+/g;
    // imgNum = img.match(reg)[1];
    productImg.src = img;
});

//# sourceMappingURL=index.f68744d1.js.map
