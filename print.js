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

// Assuming you have a parent element with the id 'tableTotal'
const tableTotal = document.getElementById('panierTableBody');

// Creating the first row (Montant total HT)
const totalHTRow = document.createElement('tr');
totalHTRow.id = 'total-ht';

const totalHTLabelCell = document.createElement('td');
totalHTLabelCell.colSpan = 3;

const totalHTLabel = document.createTextNode('Montant total HT');
totalHTLabelCell.appendChild(totalHTLabel);

const totalHTValueCell = document.createElement('td');
totalHTValueCell.id = 'total-ht';
totalHTValueCell.textContent = '$0.00';

totalHTRow.appendChild(totalHTLabelCell);
totalHTRow.appendChild(totalHTValueCell);

// Creating the second row (Total TVA)
const tvaRow = document.createElement('tr');
tvaRow.id = 'tva';

const tvaLabelCell = document.createElement('td');
tvaLabelCell.colSpan = 3;

const tvaLabel = document.createTextNode('Total TVA');
tvaLabelCell.appendChild(tvaLabel);

const tvaValueCell = document.createElement('td');
tvaValueCell.id = 'tva';
tvaValueCell.textContent = '$0.00';

tvaRow.appendChild(tvaLabelCell);
tvaRow.appendChild(tvaValueCell);

// Creating the third row (Montant total TTC)
const totalTTCRow = document.createElement('tr');
totalTTCRow.id = 'total-ttc';

const totalTTCLabelCell = document.createElement('td');
totalTTCLabelCell.colSpan = 3;

const totalTTCLabel = document.createTextNode('Montant total TTC');
totalTTCLabelCell.appendChild(totalTTCLabel);

const totalTTCValueCell = document.createElement('td');
totalTTCValueCell.id = 'total-ttc';
totalTTCValueCell.textContent = '$0.00';

totalTTCRow.appendChild(totalTTCLabelCell);
totalTTCRow.appendChild(totalTTCValueCell);

// Appending the created rows to the parent table
tableTotal.appendChild(totalHTRow);
tableTotal.appendChild(tvaRow);
tableTotal.appendChild(totalTTCRow);

// Calculate the tax (20%)
const TVA = 0.2 * totalHT;

// Calculate the total TTC
const totalTTC = totalHT + TVA;

// Update the HTML elements with the calculated values
const total_ht =document.getElementById('total-ht')
const tva=document.getElementById('tva')
const total_ttc=document.getElementById('total-ttc')
total_ht.textContent = 'Montant Total HT' + '$' + totalHT.toFixed(2);
tva.textContent = 'Total TVA' + '$' + TVA.toFixed(2);
total_ttc.textContent = 'Montant Total TTC' + '$' + totalTTC.toFixed(2);

const total_ht2 =document.getElementById('total-ht2')
const tva2=document.getElementById('tva2')
const total_ttc2=document.getElementById('total-ttc2')
total_ht2.textContent = '$' + totalHT.toFixed(2);
tva2.textContent = '$' + TVA.toFixed(2);
total_ttc2.textContent = '$' + totalTTC.toFixed(2);


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
      localStorage.removeItem('cart');
  
      // Remove the table rows from the HTML
      while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
      }
  
      // Update the total values to reflect an empty panier:
      totalHT = 0;
      total_ht.textContent = total_ht;
      document.getElementById('tva').textContent = '$' + tva.toFixed(2);
      document.getElementById('total-ttc').textContent = '$' + totalHT.toFixed(2);
    });


