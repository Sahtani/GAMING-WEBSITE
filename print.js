const btn1=document.getElementById("btn1")
const btn2=document.getElementById("btn2")
const btn3=document.getElementById("btn3")
console.log(btn1)
console.log(btn2)
console.log(btn3)


btn1.addEventListener('click', () => {
  btn1.style.display = "none";
  btn2.style.display = "none";
  btn3.style.display = "none";
  window.print();
  btn1.style.display = "block";
  btn2.style.display = "block";
  btn3.style.display = "block";
});






// Supposez que vous ayez une liste d'articles dans le panier
const panier = JSON.parse(localStorage.getItem('cart'));



// Convertissez la liste en format JSON et stockez-la dans localStorage
localStorage.setItem('cart', JSON.stringify(panier));


const panierRecupe = JSON.parse(localStorage.getItem('cart'));
const tableBody = document.getElementById('panierTableBody');
let totalHT = 0;

// Loop through the items in the panierRecupe array and create rows for each item
panierRecupe.forEach((item) => {
const row = document.createElement('tr');


  // Create table cells for each property (nom, quantite, prix)
  const nomCell = document.createElement('td');
  nomCell.textContent = item.product_name;

  const quantiteCell = document.createElement('td');
  quantiteCell.textContent = item.quantity;

  const prixUnitaireCell = document.createElement('td');
  prixUnitaireCell.textContent = '$' + item.product_price;

  const prixTotalCell = document.createElement('td');
  const prixTotal = item.quantity * item.product_price;
  prixTotalCell.textContent = '$' + prixTotal;
// Append the cells to the row

 
  row.appendChild(nomCell);
  row.appendChild(quantiteCell);
  row.appendChild(prixUnitaireCell);
  row.appendChild(prixTotalCell);
// Append the row to the table body
tableBody.appendChild(row);

// Calculate the sub-total for each item and add it to totalHT
totalHT += prixTotal;
});

// Calculate the tax (20%)
const TVA = 0.2 * totalHT;

// Calculate the total TTC
const totalTTC = totalHT + TVA;

// Update the HTML elements with the calculated values
const total_ht =document.getElementById('total-ht')
const tva=document.getElementById('tva')
const total_ttc=document.getElementById('total-ttc')
total_ht.textContent = '$' + totalHT.toFixed(2);
tva.textContent = '$' + TVA.toFixed(2);
total_ttc.textContent = '$' + totalTTC.toFixed(2);
// Append the table body to the table
const table = document.querySelector('table');
table.appendChild(tableBody);
// popup 
let popup = document.getElementById("popup");

         function openPopup(){
            popup.classList.add("open-popup");
            }
          function closePopup(){
           popup.classList.remove("open-popup");
             }

////////////////////////////////////////////////////////////////
// popup
    // Get the existing "confirm" button
    const confirmBtn = document.getElementById('confirm');
  
    // Add an event listener to the "confirm" button for deleting the panier
    confirmBtn.addEventListener('click', () => {
      // Clear the panier from localStorage
      localStorage.removeItem('panier');
  
      // Remove the table rows from the HTML
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
  
      // Update the total values to reflect an empty panier:
      totalHT = 0;
      total_ht.textContent = total_ht;
      document.getElementById('tva').textContent = '$' + (0).toFixed(2);
      document.getElementById('total-ttc').textContent = '$' + totalHT.toFixed(2);
    });


