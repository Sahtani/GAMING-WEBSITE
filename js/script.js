const burger = document.getElementById("burgerMenu");
const navbar = document.getElementById("navbarMobile");

document.addEventListener("click", closeNavbarIfNotBurgerOrNavbar);

burger.addEventListener("click", toggleNavbar);

function closeNavbarIfNotBurgerOrNavbar(event) {
  if (event.target !== burger && event.target !== navbar) {
    hideNavbar();
  }
}

function toggleNavbar(event) {
  event.stopPropagation();
  if (navbar.style.display === "block") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "block";
  }
}

function hideNavbar() {
  navbar.style.display = "none";
}

// products
const products = [
  {
    name: 'MSI Optix G24C4 24" 144Hz',
    price: 1699.99,
    image: "./img/optix.png",
    category: "Moniteurs",
  },
  {
    name: "MSI Optix G214VC",
    price: 1999.99,
    image: "./img/msi.png",
    category: "Moniteurs",
  },
  {
    name: "Razer Kraken V3 X Wired",
    price: 699.99,
    image: "./img/pro.png",
    category: "Casques",
  },
  {
    name: "ASUS VP249QGR",
    price: 2399.99,
    image: "./img/asus.png",
    category: "Moniteurs",
  },
  {
    name: "ASUS VG278Q",
    price: 2399.99,
    image: "./img/asusgaming.png",
    category: "Moniteurs",
  },
  {
    name: 'Acer 27" 170Hz WQHD',
    price: 2399.99,
    image: "./img/acer.png",
    category: "Moniteurs",
  },
  {
    name: "Huawei Display 23.8",
    price: 2099.99,
    image: "./img/huawei.png",
    category: "Moniteurs",
  },
  {
    name: "Razer Kraken",
    price: 499.99,
    image: "./img/greenHeadphones.png",
    category: "Casques",
  },
  {
    name: "Razer Kraken Quartz",
    price: 499.99,
    image: "./img/pinkHeadphones.png",
    category: "Casques",
  },
  {
    name: "Razer Kraken X Wired",
    price: 449.99,
    image: "./img/whiteHeadphones.png",
    category: "Casques",
  },
  {
    name: "Logitech G332 Wi",
    price: 599.99,
    image: "./img/logitechRed.png",
    category: "Casques",
  },
  {
    name: "HyperX Cloud II",
    price: 749.99,
    image: "./img/hyperx.png",
    category: "Casques",
  },
  {
    name: "REDRAGON Wired Mouse",
    price: 129.99,
    image: "./img/redragon.png",
    category: "Souris",
  },
  {
    name: "PlayStation 5",
    price: 6999.99,
    image: "./img/ps5.png",
    category: "Consoles",
  },
  {
    name: "HyperX Cloud",
    price: 569.99,
    image: "./img/blueHyper.png",
    category: "Casques",
  },
  {
    name: "HyperX Cloud Stinger 2",
    price: 319.99,
    image: "./img/hyperx3.png",
    category: "Casques",
  },
  {
    name: "Razer Basilisk V3 X Hyperspeed",
    price: 699.99,
    image: "./img/razerMouse.png",
    category: "Souris",
  },
  {
    name: "Xbox Series X",
    price: 7699.99,
    image: "./img/xbox.png",
    category: "Consoles",
  },
  {
    name: "Logitech G502",
    price: 499.99,
    image: "./img/mouseGaming.png",
    category: "Souris",
  },
  {
    name: "Croma Pro Wired Optical",
    price: 699.99,
    image: "./img/rgbmouse.png",
    category: "Souris",
  },
  {
    name: "The Legend of Zelda: Breath of the Wild",
    price: 599.99,
    image: "./img/botw.png",
    category: "Jeux",
  },
  {
    name: "MarvoTech G945",
    price: 349.99,
    image: "./img/marvotech.png",
    category: "Souris",
  },
  {
    name: "Origin Gaming PC",
    price: 5799.99,
    image: "./img/originGamingPC.png",
    category: "PC",
  },
  {
    name: "New York Gaming Mouse",
    price: 399.99,
    image: "./img/nyc.png",
    category: "Souris",
  },
  {
    name: "Razer BlackWidow V4 X",
    price: 1799.99,
    image: "./img/razerKeyboard.png",
    category: "Claviers",
  },
  {
    name: "Razer BlackWidow V3",
    price: 1499.99,
    image: "./img/razerKeyboard2.png",
    category: "Claviers",
  },
  {
    name: "Logitech PRO X Gaming",
    price: 1299.99,
    image: "./img/logitech.png",
    category: "Casques",
  },
  {
    name: "Razer BlackWidow V2",
    price: 1199.99,
    image: "./img/razerKeyboard3.png",
    category: "Claviers",
  },
  {
    name: "Hermes Gaming PC",
    price: 6499.99,
    image: "./img/hermesGamingPC.png",
    category: "PC",
  },
  {
    name: "Refract Gaming PC",
    price: 12299.99,
    image: "./img/refractGamingPC.png",
    category: "PC",
  },
  {
    name: "PlayStation 4",
    price: 2999.99,
    image: "./img/ps4.png",
    category: "Consoles",
  },
  {
    name: "PlayStation 4 Pro",
    price: 3799.99,
    image: "./img/ps4pro.png",
    category: "Consoles",
  },
  {
    name: "PlayStation 5 Digital",
    price: 5999.99,
    image: "./img/ps5digital.png",
    category: "Consoles",
  },
  {
    name: "Nintendo Switch",
    price: 3999.99,
    image: "./img/switch.png",
    category: "Consoles",
  },
  {
    name: "Resident Evil 4",
    price: 599.99,
    image: "./img/re4.png",
    category: "Jeux",
  },
  {
    name: "Nintendo Switch OLED",
    price: 5999.99,
    image: "./img/oled.png",
    category: "Consoles",
  },
  {
    name: "Final Fantasy 7",
    price: 599.99,
    image: "./img/ff7.png",
    category: "Jeux",
  },
  {
    name: "Grand Theft Auto 5",
    price: 599.99,
    image: "./img/gta5.png",
    category: "Jeux",
  },
];

products.forEach((product) => {
  if (
    product.category === "PC" ||
    product.category === "Moniteurs" ||
    product.category === "Casques" ||
    product.category === "Souris"
  ) {
    product.customizable = true;
  } else {
    product.customizable = false;
  }
});

const buttonIds = [
  "All",
  "Moniteurs",
  "Casques",
  "Souris",
  "Claviers",
  "PC",
  "Consoles",
  "Jeux",
];
const buttons = {};
const productsPerPage = 6;
let currentPage = 1;
const selection = document.getElementById("selection");
const productGrid = document.getElementById("product-grid");
let filteredProducts = [...products];
let counterPro = 1;
let cart = [];
const listCartHTML = document.querySelector(".listCart");
let totalCounter = document.querySelector("#navbar span");
let finalPrice = 0;
const cartButton = document.getElementById("cartIcon");
const cosBtn = document.querySelectorAll(".customize");
let currentGpu;
let price;

// create ids for each one
products.forEach((product) => {
  product.id = counterPro;
  console.log(product.name);
  console.log(product.id);
  counterPro++;
});

// function to check what button you clicked
buttonIds.forEach((id) => {
  buttons[id + "Btn"] = document.getElementById(id + "Btn");
  console.log(buttons);
  buttons[id + "Btn"].addEventListener("click", function () {
    filter(id);
  });
});

// filtrage mobile
selection.onchange = changeOption;

function changeOption() {
  var value = this.value;
  currentPage = 1;
  filter(value);
}

// filtrage desktop
function filter(id) {
  if (id === "All") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((product) => product.category === id);
  }
  currentPage = 1;

  displayProducts();
}

// function to display products
function displayProducts() {
  productGrid.innerHTML = "";

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // important, this is how the program knows which products to display
  const productsToDisplay = filteredProducts.slice(startIndex, endIndex);

  productsToDisplay.forEach((element) => {
    // create the product
    const productDiv = document.createElement("div");
    productDiv.className =
      "bg-blueText bg-opacity-10 border-dark border-2 pb-3 hover:animate-scaleup-mini monitors product";

    const productCategory = document.createElement("p");
    productCategory.className =
      "text-white bg-blueText w-min pr-14 pl-2 category";
    productCategory.innerHTML = element.category;

    const productImage = document.createElement("img");
    productImage.src = element.image;
    productImage.alt = element.name;

    const productName = document.createElement("p");
    productName.className = "text-center text-white font-semibold";
    productName.innerHTML = element.name;

    const productPrice = document.createElement("p");
    productPrice.className = "text-center text-primary font-semibold";
    productPrice.innerHTML = element.price.toFixed(2) + " DH";

    const productButtons = document.createElement("div");
    productButtons.className = "text-center";
    const customizeButton = document.createElement("a");

    if (element.customizable === true) {
      customizeButton.className =
        "bg-customize text-white pl-2 pr-2 hover:bg-primary transition-all customize";
      customizeButton.href = "#";
      customizeButton.innerHTML = "Customize";
      productButtons.appendChild(customizeButton);
    }

    const checkoutButton = document.createElement("a");
    checkoutButton.className =
      "bg-checkout text-white pl-3 pr-3 hover:bg-primary transition-all";
    checkoutButton.innerHTML = "Checkout";

    // Event listener for adding a product to the cart
    checkoutButton.addEventListener("click", (event) => {
      let id_product = element.id;
      console.log(element.id);
      addToCart(id_product, element.name, element.price);
    });

    customizeButton.addEventListener("click", (event) => {
      console.log("help");
      if (element.category === "PC") {
        toggleModal("PC", element);
      } else if (element.category === "Souris") {
        toggleModal("Souris", element);
      } else if (element.category === "Moniteurs") {
        toggleModal("Moniteurs", element);
      } else if (element.category === "Casques") {
        toggleModal("Casques", element);
      }

      popUpImg.src = element.image;
      popUpName.textContent = element.name;
      popUpPrice.textContent = element.price;

      // Add an event listener for the "Add to Cart" button
      const addtocart2 = document.getElementById("addToCart");
      addtocart2.addEventListener("click", () => {
        if (element.category === "PC") {
          cart.push({
            product_id: element.id,
            product_name: `${element.name} ${currentGpu}`,
            product_price: price,
            quantity: 1,
          });
        } else {
          cart.push({
            product_id: element.id,
            product_name: `${element.name} - Customized`,
            product_price: price,
            quantity: 1,
            // Add other customization options based on the category
          });
        }

        addCartToHTML();
        addCartToMemory();
      });

      counter++;
    });

    productGrid.appendChild(productDiv);
    productDiv.appendChild(productCategory);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productButtons);
    productButtons.appendChild(checkoutButton);

    updatePageNumbers();
  });
}

const pageNumbers = document.getElementById("pageNumbers");
const prevPageButton = document.getElementById("prevPage");
const nextPageButton = document.getElementById("nextPage");

function updatePageNumbers() {
  // reset numbers
  pageNumbers.innerHTML = "";

  // calculate how many pages are there
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // start creating the pages
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = i;
    pageButton.addEventListener("click", () => {
      currentPage = i;
      displayProducts();
      updatePageNumbers();
    });

    if (i === currentPage) {
      pageButton.classList.add("bg-primary", "text-white", "p-4");
    } else {
      pageButton.classList.add("bg-secondary", "text-primary", "p-4");
    }

    pageNumbers.appendChild(pageButton);
  }
}

// function to change page when click on previous
prevPageButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    displayProducts();
    updatePageNumbers();
  }
});

// function to change page when click on next page
nextPageButton.addEventListener("click", () => {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayProducts();
    updatePageNumbers();
  }
});

// Function to add a product to the cart
const addToCart = (product_id, product_name, product_price) => {
  let positionProduct = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (cart.length <= 0) {
    cart = [
      {
        product_id: product_id,
        product_name: product_name,
        product_price: product_price,
        quantity: 1,
      },
    ];
  } else if (positionProduct < 0) {
    cart.push({
      product_id: product_id,
      product_name: product_name,
      product_price: product_price,
      quantity: 1,
    });
  } else {
    cart[positionProduct].quantity = cart[positionProduct].quantity + 1;
  }
  addCartToHTML();
  addCartToMemory();
};

const addCartToHTML = () => {
  listCartHTML.innerHTML = "";

  finalPrice = 0;
  let totalQuantity = 0;
  if (cart.length > 0) {
    cart.forEach((item) => {
      totalQuantity = totalQuantity + item.quantity;
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      newItem.dataset.id = item.product_id;

      let positionProduct = products.findIndex(
        (value) => value.id == item.product_id
      );
      let info = products[positionProduct];
      finalPrice += info.price * item.quantity;
      listCartHTML.appendChild(newItem);
      newItem.innerHTML = `
                <div class = "flex items-center">
                    <img src="${info.image}" alt="" class = "w-1/4 image">
                    <div class = "w-2/4">
                        <p class = "text-center text-white font-semibold name">${
                          info.name
                        }</p>
                        <p class = "text-center text-primary font-semibold singlePrice">${
                          info.price * item.quantity
                        }</p>
                        <div class = "text-center">
                            <a href="#" class = "bg-customize text-white text-xs pl-2 pr-2 minus"><</a>
                            <span class = "text-white px-2">${
                              item.quantity
                            }</span>
                            <a href="#" class = "bg-checkout text-white text-xs pl-2 pr-2 plus">></a>
                        </div>
                    </div>
                </div>
            `;
    });
  }

  listCartHTML.innerHTML += `
    <div class = "flex">
    <button class="close w-full bg-secondary text-white">Close</button>
    <button class="checkOut w-full bg-primary text-white" onclick="window.location.href='../devis.html';">Check out</button>
    </div>

    <div class = "totalPrice text-center text-primary font-semibold">${finalPrice}</div>
    `;
  totalCounter.innerText = totalQuantity;
};

const addCartToMemory = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

listCartHTML.addEventListener("click", (event) => {
  let positionClick = event.target;
  let itemElement = positionClick.closest(".item");

  if (itemElement) {
    let product_id = itemElement.dataset.id;
    let type = "minus";

    if (positionClick.classList.contains("plus")) {
      type = "plus";
    }

    changeQuantityCart(product_id, type);
  }
});

const changeQuantityCart = (product_id, type) => {
  let positionItemInCart = cart.findIndex(
    (value) => value.product_id == product_id
  );
  if (positionItemInCart >= 0) {
    switch (type) {
      case "plus":
        cart[positionItemInCart].quantity =
          cart[positionItemInCart].quantity + 1;
        break;

      default:
        let changeQuantity = cart[positionItemInCart].quantity - 1;
        if (changeQuantity > 0) {
          cart[positionItemInCart].quantity = changeQuantity;
        } else {
          cart.splice(positionItemInCart, 1);
        }
        break;
    }
  }
  addCartToHTML();
  addCartToMemory();
};

cartButton.addEventListener("click", () => {
  if (totalCounter.innerHTML != "0") {
    listCartHTML.classList.toggle("hidden");
  }
});

totalCounter.addEventListener("click", () => {
  if (totalCounter.innerHTML != "0") {
    listCartHTML.classList.toggle("hidden");
  }
});

function init() {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    addCartToHTML();
  }
}

init();
displayProducts();

function toggleModal(category, element) {
  const productSection = document.getElementById("product_section");
  productSection.classList.toggle("hidden");

  // Masque toutes les sections de catégories
  const allCategorySections = document.querySelectorAll(".category-section");
  allCategorySections.forEach((section) => {
    section.classList.add("hidden");
  });

  // Affiche la section correspondant à la catégorie spécifiée
  const categorySection = document.getElementById(category);
  if (categorySection) {
    categorySection.classList.toggle("hidden");
  }
  document
    .getElementById("addToCart")
    .addEventListener("click", () => calculate_price(element));
}
let popUpImg = document.getElementById("popUpImg");
let popUpPrice = document.getElementById("popUpPrice");
let popUpName = document.getElementById("popUpName");
let memory = document.getElementById("memory");
let gpu = document.getElementById("gpu");
let cpu = document.getElementById("cpu");
let memorySelect, gpuSelect, cpuSelect;

// customize product

const memoryPrice = {
  "250gb": 50,
  "500gb": 100,
  "1tb": 150,
  "2tb": 200,
  "3tb": 250,
  "250gb_ssd": 80,
  "500gb_ssd": 130,
  "1tb_ssd": 180,
  "2tb_ssd": 230,
  "3tb_ssd": 280,
};

const gpuPrice = {
  "RTX 4090": 600,
  "RTX 4070": 500,
  "GeForce RTX 4060": 400,
  "GeForce RTX 4080": 550,
  "RTX 4060 Ti": 450,
  "Radeon RX 7900 XTX": 580,
  "Radeon RX 7600": 480,
  "Radeon RX 7800 XT": 530,
  "Radeon RX 7900 XT": 620,
  "Radeon RX 6700 XT": 550,
  "Arc A750": 550,
  "Arc A380": 450,
};

const cpuPrice = {
  "Ryzen 5 7600": 250,
  "Ryzen 7 7800X3D": 320,
  "Ryzen 7 5800X3D": 300,
  "Ryzen 9 7950X3D": 400,
  "Ryzen 5 7600X": 260,
  "Ryzen 5 5600X": 280,
  "Ryzen 5 5600G": 270,
  "Core i3-13100F": 230,
  "Core i5-13600K": 300,
  "Core i9-13900K": 400,
  "Core i7-13700K": 350,
  "Core i5-13400": 320,
};


// Set up the event listener for the customize buttons
let dataTable = [];
let counter = 0;
//  pour souris
const dpiValues = [800, 1000, 1200, 1600, 2000];
const dpiPrices = { 800: 30, 1000: 40, 1200: 50, 1600: 60, 2000: 70 };
const selectElement = document.getElementById("dpiSelect");
dpiValues.forEach(function (value) {
  const optionElement = document.createElement("option");
  optionElement.value = value;
  optionElement.text = `${value} DPI`;
  selectElement.appendChild(optionElement);
});
// pour moniteurs
const refreshRates = [60, 75, 120, 144, 165, 240];
const refreshRatesPrice = {
  60: 30,
  75: 40,
  120: 50,
  144: 60,
  165: 70,
  240: 80,
};
const refreshRateSelect = document.getElementById("refreshRateSelect");

refreshRates.forEach(function (value) {
  const optionElement = document.createElement("option");
  optionElement.value = value;
  optionElement.text = `${value} Hz`;
  refreshRateSelect.appendChild(optionElement);
  console.log("bkjhgkj");
});
// pour casques:
const frequencySelect = document.getElementById("frequencySelect");
const sizeSelect = document.getElementById("sizeSelect");
const frequencyOptions = [
  { option: "20 Hz - 200 Hz", price: 50 },
  { option: "30 Hz - 250 Hz", price: 60 },
  { option: "40 Hz - 300 Hz", price: 70 },
];

const sizeOptions = [
  { option: "Supra-auriculaires légers", price: 80 },
  { option: "Circum-auriculaires fermés", price: 100 },
  { option: "Intra-auriculaires avec embouts en mousse", price: 120 },
];

function addOptions(options, dropdownId) {
  const dropdown = document.getElementById(dropdownId);

  options.forEach((optionData) => {
    const optionElement = document.createElement("option");
    optionElement.value = optionData.option.toLowerCase().replace(/\s+/g, "-");
    optionElement.text = `${optionData.option} `;
    dropdown.add(optionElement);
  });
}

addOptions(frequencyOptions, "frequencySelect");
addOptions(sizeOptions, "sizeSelect");

// calculer le prix de produit avec faire un teste de categories:

function calculate_price(element) {
  switch (element.category) {
    case "PC":
      const memory_ = document.getElementById("memory").value;
      const gpu_ = document.getElementById("gpu").value;
      const cpu_ = document.getElementById("cpu").value;
      price = memoryPrice[memory_] + gpuPrice[gpu_] + cpuPrice[cpu_];

      price = (price + parseFloat(popUpPrice.textContent)).toFixed(2);

      popUpPrice.textContent = price;

      currentGpu = gpu_;
      element.price = price;
      break;
    case "Souris":
      price =
        element.price + dpiPrices[document.getElementById("dpiSelect").value];

      element.price = price;
      popUpPrice.textContent = price;
      break;
    case "Moniteurs":
      price =
        element.price +
        refreshRatesPrice[document.getElementById("refreshRateSelect").value];
      element.price = price;
      popUpPrice.textContent = price;
      break;
    case "Casques":
      // pour trouver l'option selectionner:
    const selectedFrequency = frequencyOptions.find(
      (option) =>
        option.option.toLowerCase().replace(/\s+/g, "-") ===
        frequencySelect.value
    );
    console.log(selectedFrequency);

    const selectedSize = sizeOptions.find(
      (option) =>
        option.option.toLowerCase().replace(/\s+/g, "-") === sizeSelect.value
    );
    console.log(selectedSize);

      price = element.price + selectedFrequency.price + selectedSize.price;
       
      element.price = price;
      popUpPrice.textContent = price;
      break;

    default:
      break;
  }

  console.log(element);
}
