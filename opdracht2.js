// opdracht 2a
// in de main.js moeten alle tv sold bij elkaar worden opgeteld.

let totalSold = 0;

for (let i = 0; i < inventory.length; i++) {
    totalSold += inventory[i].sold;
}
console.log(totalSold);

// let tvSold = 0
//
// inventory.map((tv)=>{
//     tvSold += tv.sold;
// });
//
// console.log(tvSold);

// opdracht 2b
// hierbij moet ik in javaScript een aanpassing maken wat er te zien is.
// eerst een ID aanmaken in HTML pagina.
// getElementByID gebruiken.
// nu een link maken met de loop opdracht 2a. door gebruik te maken van element.textContent
// in CSS het id aanspreken en dan kleur groen meegeven.

const opdracht2b = document.getElementById("soldTV");
opdracht2b.textContent = totalSold;

// opdracht 2c
// hetzelfde als 2a alleen dan met ingekochte tv's(originalStock)

let totalBuy = 0;

for (let i = 0; i < inventory.length; i++) {
    totalBuy += inventory[i].originalStock;
}
console.log(totalBuy);

//opdracht 2d
// hetzelfde als opdracht 2b

const opdracht2d = document.getElementById('totalBuy');
opdracht2d.textContent = totalBuy;

//opdracht 2e
// totalBuy moet min totalsold.
// ik snap niet waarom goalToSale groene underline heeft.

const opdracht2e = document.getElementById('goalToSale')
const goalToSale = totalBuy - totalSold;
opdracht2e.textContent = goalToSale;

console.log(goalToSale);
