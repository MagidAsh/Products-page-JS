const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");

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

searchInput.addEventListener("keyup", searchHandler);

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

buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});
