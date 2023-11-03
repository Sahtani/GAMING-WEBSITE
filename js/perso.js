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
        name: 'Razer Kraken V3 X Wired',
        price: 699.99,
        image: "./img/pro.png",
        category: "Casques"
    },
    {
        name: 'Logitech PRO X Gaming',
        price: 1299.99,
        image: "./img/logitech.png",
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
        name: 'REDRAGON Wired Mouse',
        price: 129.99,
        image: "./img/redragon.png",
        category: "Souris"
    },
    {
        name: 'MarvoTech G945',
        price: 349.99,
        image: "./img/marvotech.png",
        category: "Souris"
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
        name: 'Razer BlackWidow V2',
        price: 1199.99,
        image: "./img/razerKeyboard3.png",
        category: "Claviers"
    },
    {
        name: 'Origin Gaming PC',
        price: 5799.99,
        image: "./img/originGamingPC.png",
        category: "PC"
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
        name: 'PlayStation 5',
        price: 6999.99,
        image: "./img/ps5.png",
        category: "Consoles"
    },
    {
        name: 'PlayStation 5 Digital',
        price: 5999.99,
        image: "./img/ps5digital.png",
        category: "Consoles"
    },
    {
        name: 'Xbox Series X',
        price: 7699.99,
        image: "./img/xbox.png",
        category: "Consoles"
    },
    {
        name: 'Nintendo Switch',
        price: 3999.99,
        image: "./img/switch.png",
        category: "Consoles"
    },
    {
        name: 'Nintendo Switch OLED',
        price: 5999.99,
        image: "./img/oled.png",
        category: "Consoles"
    },
    {
        name: 'The Legend of Zelda: Breath of the Wild',
        price: 599.99,
        image: "./img/botw.png",
        category: "Jeux"
    },
    {
        name: 'Resident Evil 4',
        price: 599.99,
        image: "./img/re4.png",
        category: "Jeux"
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


const hdd=document.getElementById("hdd");
const ssd=document.getElementById("ssd");
const amd=document.getElementById("amd");
const intel=document.getElementById("intel");
const nvidia=document.getElementById("nvidia");
const select1=document.getElementById("select1");
const select2=document.getElementById("select2");
const select3=document.getElementById("select3");
const s1=document.getElementById("s1");
const s2=document.getElementById("s2");
const intel2=document.getElementById("intel2");
const amd2=document.getElementById("amd2");

const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const img1=document.getElementById("img1");
const img2=document.getElementById("img2");
const img3=document.getElementById("img3");
console.log(img2)
// price




hdd.addEventListener('click',()=>{
    hdd.style.backgroundColor="#030029";

})
hdd.addEventListener('mouseleave',()=>{
    hdd.style.backgroundColor="#1E3B79"
})
ssd.addEventListener('click',()=>{
    ssd.style.backgroundColor="#1E3B79";

})
ssd.addEventListener('mouseleave',()=>{
    ssd.style.backgroundColor="#030029"
})

// GPU
 if(intel.addEventListener('click',()=>{
   intel.style.backgroundColor="#1E3B79";
 amd.style.backgroundColor="#030029";
    select1.style.display="none";
    select2.style.display="block";
    select3.style.display="none";
})){}
else if(nvidia.addEventListener('click',()=>{
    nvidia.style.backgroundColor="#1E3B79";
  amd.style.backgroundColor="#030029";
  intel.style.backgroundColor="#030029";
  
     select1.style.display="none";
     select2.style.display="none";
     select3.style.display="block";
 })){

 }else if(amd.addEventListener('click',()=>{
    amd.style.backgroundColor="#1E3B79";
 nvidia.style.backgroundColor="#030029";
  intel.style.backgroundColor="#030029";
  
     select1.style.display="block";
     select2.style.display="none";
     select3.style.display="none";
 })){

 }
//  CPU
amd2.addEventListener('click',()=>{
    amd2.style.backgroundColor="#1E3B79";

})
 if(intel2.addEventListener('click',()=>{
   intel2.style.backgroundColor="#1E3B79";
 amd2.style.backgroundColor="#030029";
    s1.style.display="none";
    s2.style.display="block";
})){}
else if(amd2.addEventListener('click',()=>{
    intel2.style.backgroundColor="#030029";
  
     s1.style.display="block";
     s2.style.display="none";
 })){}

// ********color

btn1.addEventListener('click',()=>{
    img1.style.display="none";
    img2.style.display="block";




})










// const price=document.querySelectorAll("#price")


// var listeDeroulante = document.getElementById("list");


// var conteneur = document.getElementById("containner");


// var prixParOption = {
//   op1: 999.99,
//   op2: 1499.99,
  
// };


// listeDeroulante.addEventListener("change", function () {
  
//   var valeurOption = listeDeroulante.value;

  
//   if (prixParOption.hasOwnProperty(valeurOption)) {
    
    
//     paragraphePrix.textContent = "Price: " + prixParOption[valeurOption].toFixed(2) + " $";

    
//     conteneur.innerHTML = "";

    
    
//   }
// });
// const getStorageValue = () => {
//     let storagePrice =storageValue.value
//     console.log(storagePrice)
//     return parseInt(storagePrice)
// }
// const getvidiagraphique =() =>{
//     let graphiqueprice = document.getElementById("cartenvidia").value
//     console.log(graphiqueprice)
//     return parseInt(graphiqueprice)
// }

// storageValue.addEventListener("change", () => {
//     totalPrice = getColorValue() + getStorageValue() +getvidiagraphique() 
//     totalValue.textContent = totalPrice
// })


// colorSelect.forEach(input => {
//     input.addEventListener("change", () => {
//         totalPrice =  getColorValue() + getStorageValue() + getvidiagraphique() 
//         console.log(totalPrice)
//         totalValue.textContent = totalPrice
//     })
// })
