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
const productGrid = document.getElementById("product-grid");
let filteredProducts = [...products];

buttonIds.forEach((id) => {
  buttons[id + "Btn"] = document.getElementById(id + "Btn");
  console.log(buttons);
  buttons[id + "Btn"].addEventListener("click", function () {
    filter(id);
  });
});

function filter(id) {
  if (id === "All") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((product) => product.category === id);
  }

  displayProducts();
}

function displayProducts() {
  productGrid.innerHTML = "";

  filteredProducts.forEach((element) => {
    const productDiv = document.createElement("div");
    productDiv.className =
      "bg-blueText bg-opacity-10 border-dark border-2 pb-3 hover:animate-scaleup-mini monitors product";

    const productCategory = document.createElement("p");
    productCategory.className = "text-white bg-blueText w-min pr-14 pl-2";
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
    customizeButton.className =
      "bg-customize text-white pl-2 pr-2 hover:bg-primary transition-all customize";
    // customizeButton.href = "#";
    customizeButton.innerHTML = "Customize";

    const checkoutButton = document.createElement("a");
    checkoutButton.className =
      "bg-checkout text-white pl-3 pr-3 hover:bg-primary transition-all";
    checkoutButton.innerHTML = "Checkout";

    productGrid.appendChild(productDiv);
    productDiv.appendChild(productCategory);
    productDiv.appendChild(productImage);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productButtons);
    productButtons.appendChild(customizeButton);
    productButtons.appendChild(checkoutButton);
  });
}
displayProducts();
function toggleModal() {
  document.getElementById("modal").classList.toggle("hidden");
}

let popUpImg = document.getElementById("popUpImg");
let popUpPrice = document.getElementById("popUpPrice");
let popUpName = document.getElementById("popUpName");
let memory = document.getElementById("memory");
let gpu = document.getElementById("gpu");
let cpu = document.getElementById("cpu");
let cosBtn = document.querySelectorAll(".customize");
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
let price;
document.getElementById("addToCart").addEventListener("click", function () {
  const memory_ = document.getElementById("memory").value;
  const gpu_ = document.getElementById("gpu").value;
  const cpu_ = document.getElementById("cpu").value;

  price = memoryPrice[memory_] + gpuPrice[gpu_] + cpuPrice[cpu_];

  price = (price + parseFloat(popUpPrice.textContent)).toFixed(2);

  popUpPrice.textContent = price;
});

// Set up the event listener for the customize buttons
let dataTable = [];
let counter = 0;

cosBtn.forEach(function (e, index) {
  e.addEventListener("click", function () {
    toggleModal();
    let objPanier = {}; 

    console.log("customize" + index);
    console.log(products[index].name);
    console.log(products[index].price);
    console.log(products[index].category);
    popUpImg.src = products[index].image;
    popUpName.textContent = products[index].name;
    popUpPrice.textContent = products[index].price;

    // Add an event listener for the "Add to Cart" button
    const addToCart = document.getElementById("addToCart");
    addToCart.addEventListener("click", () => {
      objPanier.id = counter;
      objPanier.img = products[index].image;
      objPanier.name = products[index].name;
      objPanier.price = price; 
      objPanier.memory = memorySelect;
      objPanier.gpu = gpuSelect;
      objPanier.cpu = cpuSelect;

      handleSelect(objPanier);
      dataTable.push(objPanier);
      localStorage.setItem("dataTable", JSON.stringify(dataTable));
    });

    function handleSelect(objPanier) {
      
      console.log(objPanier);
    }

    counter++;
  });
});
