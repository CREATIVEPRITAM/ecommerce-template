const feturProducts = [
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

const productsList = document.querySelector(".products-container");

const newarrivalsList = document.querySelector(".new-arrivals");

feturProducts.forEach((singleItem) => {
  let html = `
    <div class="products">
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

newArrivals.forEach((singleItem) => {
  let html = `
      <div class="products">
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

// console.log(feturProducts);

// hmburger menu

const navBar = document.querySelector(".menu");
const navSlide = document.querySelector(".header .nav-links ul");
const crosBar = document.querySelector(".cros");

navBar.addEventListener("click", () => {
  navSlide.style.right = "0";
});
crosBar.addEventListener('click', () =>{
  navSlide.style.right = "-60%";
})
