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
        category: "Moniteurs"
    },
    {
        name: 'MSI Optix G214VC',
        price: 1999.99,
        image: "./img/msi.png",
        category: "Moniteurs"
    },
    {
        name: 'Razer Kraken V3 X Wired',
        price: 699.99,
        image: "./img/pro.png",
        category: "Casques"
    },
    {
        name: 'ASUS VP249QGR',
        price: 2399.99,
        image: "./img/asus.png",
        category: "Moniteurs"
    },
    {
        name: 'ASUS VG278Q',
        price: 2399.99,
        image: "./img/asusgaming.png",
        category: "Moniteurs"
    },
    {
        name: 'Acer 27" 170Hz WQHD',
        price: 2399.99,
        image: "./img/acer.png",
        category: "Moniteurs"
    },
    {
        name: 'Huawei Display 23.8',
        price: 2099.99,
        image: "./img/huawei.png",
        category: "Moniteurs"
    },
    {
        name: 'Razer Kraken',
        price: 499.99,
        image: "./img/greenHeadphones.png",
        category: "Casques"
    },
    {
        name: 'Razer Kraken Quartz',
        price: 499.99,
        image: "./img/pinkHeadphones.png",
        category: "Casques"
    },
    {
        name: 'Razer Kraken X Wired',
        price: 449.99,
        image: "./img/whiteHeadphones.png",
        category: "Casques"
    },
    {
        name: 'Logitech G332 Wi',
        price: 599.99,
        image: "./img/logitechRed.png",
        category: "Casques"
    },
    {
        name: 'HyperX Cloud II',
        price: 749.99,
        image: "./img/hyperx.png",
        category: "Casques"
    },
    {
        name: 'REDRAGON Wired Mouse',
        price: 129.99,
        image: "./img/redragon.png",
        category: "Souris"
    },
    {
        name: 'PlayStation 5',
        price: 6999.99,
        image: "./img/ps5.png",
        category: "Consoles"
    },
    {
        name: 'HyperX Cloud',
        price: 569.99,
        image: "./img/blueHyper.png",
        category: "Casques"
    },
    {
        name: 'HyperX Cloud Stinger 2',
        price: 319.99,
        image: "./img/hyperx3.png",
        category: "Casques"
    },
    {
        name: 'Razer Basilisk V3 X Hyperspeed',
        price: 699.99,
        image: "./img/razerMouse.png",
        category: "Souris"
    },
    {
        name: 'Xbox Series X',
        price: 7699.99,
        image: "./img/xbox.png",
        category: "Consoles"
    },
    {
        name: 'Logitech G502',
        price: 499.99,
        image: "./img/mouseGaming.png",
        category: "Souris"
    },
    {
        name: 'Croma Pro Wired Optical',
        price: 699.99,
        image: "./img/rgbmouse.png",
        category: "Souris"
    },
    {
        name: 'The Legend of Zelda: Breath of the Wild',
        price: 599.99,
        image: "./img/botw.png",
        category: "Jeux"
    },
    {
        name: 'MarvoTech G945',
        price: 349.99,
        image: "./img/marvotech.png",
        category: "Souris"
    },
    {
        name: 'Origin Gaming PC',
        price: 5799.99,
        image: "./img/originGamingPC.png",
        category: "PC"
    },
    {
        name: 'New York Gaming Mouse',
        price: 399.99,
        image: "./img/nyc.png",
        category: "Souris"
    },
    {
        name: 'Razer BlackWidow V4 X',
        price: 1799.99,
        image: "./img/razerKeyboard.png",
        category: "Claviers"
    },
    {
        name: 'Razer BlackWidow V3',
        price: 1499.99,
        image: "./img/razerKeyboard2.png",
        category: "Claviers"
    },
    {
        name: 'Logitech PRO X Gaming',
        price: 1299.99,
        image: "./img/logitech.png",
        category: "Casques"
    },
    {
        name: 'Razer BlackWidow V2',
        price: 1199.99,
        image: "./img/razerKeyboard3.png",
        category: "Claviers"
    },
    {
        name: 'Hermes Gaming PC',
        price: 6499.99,
        image: "./img/hermesGamingPC.png",
        category: "PC"
    },
    {
        name: 'Refract Gaming PC',
        price: 12299.99,
        image: "./img/refractGamingPC.png",
        category: "PC"
    },
    {
        name: 'PlayStation 4',
        price: 2999.99,
        image: "./img/ps4.png",
        category: "Consoles"
    },
    {
        name: 'PlayStation 4 Pro',
        price: 3799.99,
        image: "./img/ps4pro.png",
        category: "Consoles"
    },
    {
        name: 'PlayStation 5 Digital',
        price: 5999.99,
        image: "./img/ps5digital.png",
        category: "Consoles"
    },
    {
        name: 'Nintendo Switch',
        price: 3999.99,
        image: "./img/switch.png",
        category: "Consoles"
    },
    {
        name: 'Resident Evil 4',
        price: 599.99,
        image: "./img/re4.png",
        category: "Jeux"
    },
    {
        name: 'Nintendo Switch OLED',
        price: 5999.99,
        image: "./img/oled.png",
        category: "Consoles"
    },
    {
        name: 'Final Fantasy 7',
        price: 599.99,
        image: "./img/ff7.png",
        category: "Jeux"
    },
    {
        name: 'Grand Theft Auto 5',
        price: 599.99,
        image: "./img/gta5.png",
        category: "Jeux"
    }
]

const buttonIds = ["All", "Moniteurs", "Casques", "Souris", "Claviers", "PC", "Consoles", "Jeux"];
const buttons = {};
const productGrid = document.getElementById("product-grid");
let filteredProducts = [...products];

buttonIds.forEach(id => {
    buttons[id + "Btn"] = document.getElementById(id + "Btn");
    console.log(buttons);
    buttons[id + "Btn"].addEventListener("click", function() {
        filter(id);
    });
});

function filter(id) {
    if (id === "All") {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === id);
    }

    displayProducts();
}

function displayProducts () {
    productGrid.innerHTML = '';

    filteredProducts.forEach((element) => {
    const productDiv = document.createElement("div");
    productDiv.className = 'bg-blueText bg-opacity-10 border-dark border-2 pb-3 hover:animate-scaleup-mini monitors product';

    const productCategory = document.createElement("p");
    productCategory.className = 'text-white bg-blueText w-min pr-14 pl-2';
    productCategory.innerHTML = element.category;

    const productImage = document.createElement("img");
    productImage.src = element.image;
    productImage.alt = element.name;

    const productName = document.createElement("p");
    productName.className = 'text-center text-white font-semibold';
    productName.innerHTML = element.name;

    const productPrice = document.createElement("p");
    productPrice.className = 'text-center text-primary font-semibold';
    productPrice.innerHTML = element.price.toFixed(2) + ' DH';

    const productButtons = document.createElement("div");
    productButtons.className = 'text-center';

    const customizeButton = document.createElement("a");
    customizeButton.className = 'bg-customize text-white pl-2 pr-2 hover:bg-primary transition-all customize';
    customizeButton.href = "#";
    customizeButton.innerHTML = "Customize";

    const checkoutButton = document.createElement("a");
    checkoutButton.className = 'bg-checkout text-white pl-3 pr-3 hover:bg-primary transition-all';
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