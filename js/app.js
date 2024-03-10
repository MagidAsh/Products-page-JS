const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
const priceButton = document
  .getElementById("search-price")
  .querySelector("button");

const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  //   console.dir(searchValue);

  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    // console.log(productName);

    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  changeClass(filter);

  products.forEach((product) => {
    const category = product.dataset.category;

    if (filter === "all") {
      product.style.display = "block";
    } else {
      category === filter
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const searchPriceHandler = (event) => {
  const searchPrice = +event.target.parentElement.children[0].value; // With the Plus operator we turn the String into Namber

  products.forEach((product) => {
    const productPrice = product.children[2].innerText;
    const price = +productPrice.split(" ")[1]; // With the Plus operator we turn the String into Namber
    console.log(price);

    if (!searchPrice) {
      product.style.display = "block";
    } else {
      searchPrice === price
        ? (product.style.display = "block")
        : (product.style.display = "none");
    }
  });
};

const start = () => {
  searchInput.addEventListener("keyup", searchHandler);

  buttons.forEach((button) => {
    button.addEventListener("click", filterHandler);
  });

  priceButton.addEventListener("click", searchPriceHandler);
};

window.addEventListener("load", start);
