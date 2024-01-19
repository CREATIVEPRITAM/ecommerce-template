const feturProductArray = [
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 780,
    image: "n1.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 570,
    image: "n2.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 999,
    image: "n3.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 900,
    image: "n4.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 950,
    image: "n5.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 700,
    image: "n6.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 908,
    image: "n7.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 835,
    image: "n8.jpg",
  },
];
const newArrivals = [
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 780,
    image: "f1.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 570,
    image: "f2.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 999,
    image: "f3.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 900,
    image: "f4.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 950,
    image: "f5.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 700,
    image: "f6.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 908,
    image: "f7.jpg",
  },
  {
    brandName: "addidas",
    title: "Cartoon Astronout T-shirts",
    star: 4,
    prise: 78,
    image: "f8.jpg",
  },
];

///////////// hmburger menu
const navBar = document.querySelector(".menu");
const navSlide = document.querySelector(".header .nav-links ul");
const crosBar = document.querySelector(".cros");

const productsList = document.querySelector(".products-container");
const newarrivalsList = document.querySelector(".new-arrivals");
const allProductsArray = [...feturProductArray, ...newArrivals];

const smallGalleryImage = document.querySelectorAll(".small-img");
const mainImg = document.querySelector("#mainImg");

var path = window.location.pathname;
var page = path.split("/").pop();

const midIndex = Math.floor(feturProductArray.length / 2);
const firstGroup = feturProductArray.slice(0, midIndex);
// const secondGroup = feturProductArray.slice(midIndex);
// console.log(firstGroup); // Output: ['Alice', 'Bob', 'Charlie']
// console.log(secondGroup); // Output: ['David', 'Eve', 'Frank']

if (page === "index.html") {
  featuredProducts(feturProductArray);
  newArrivalProducts(newArrivals);
} else if (page === "shop.html") {
  allProducts(allProductsArray);
} else if (page === "singleProducts.html") {
  featuredProducts(firstGroup);
}

var path = window.location.pathname;
var page = path.split("/").pop();

navBar.addEventListener("click", () => {
  navSlide.style.right = "0";
});
crosBar.addEventListener("click", () => {
  navSlide.style.right = "-60%";
});

function newArrivalProducts(newArrivals) {
  newArrivals.forEach((singleItem) => {
    let html = `
        <div class="products" onclick="changeLocatio()">
          <img src="img/products/${singleItem.image}" alt="">
          <div class="description">
            <span>${singleItem.brandName}</span>
            <h5>${singleItem.title}</h5>
            <div class="star">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star-half"></i>
            </div>
    
            <h4>Rs${singleItem.prise}</h4>
          </div>
          <a href="#"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
        </div>
      `;

    newarrivalsList.insertAdjacentHTML("beforeend", html);
  });
}

function featuredProducts(feturProducts) {
  feturProducts.forEach((singleItem) => {
    let html = `
      <div class="products" onclick="changeLocatio()">
        <img src="img/products/${singleItem.image}" alt="">
        <div class="description">
          <span>${singleItem.brandName}</span>
          <h5>${singleItem.title}</h5>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </div>
  
          <h4>Rs${singleItem.prise}</h4>
        </div>
        <a href="#"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
      </div>
    `;

    productsList.insertAdjacentHTML("beforeend", html);
  });
}

function allProducts(allProductsArray) {
  console.log("allProducts");
  allProductsArray.forEach((singleItem) => {
    let html = `
      <div class="products" onclick="changeLocatio()">
        <img src="img/products/${singleItem.image}" alt="">
        <div class="description">
          <span>${singleItem.brandName}</span>
          <h5>${singleItem.title}</h5>
          <div class="star">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half"></i>
          </div>
  
          <h4>Rs${singleItem.prise}</h4>
        </div>
        <a href="#"><i class="fa-sharp fa-solid fa-cart-shopping"></i></a>
      </div>
    `;

    productsList.insertAdjacentHTML("beforeend", html);
  });
}

//////////////// gallery image change on click////////////////
smallGalleryImage.forEach((singleImage) => {
  singleImage.addEventListener("click", (e) => {
    mainImg.src = e.target.src;
  });
});

function changeLocatio() {
  window.location.href = "singleProducts.html";
  console.log("hello");
}
