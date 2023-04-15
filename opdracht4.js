// opdracht 4a
// een functie maken met een map methode.

// hieronder is het voor alle tv's
// function getTVName(tv) {
//     return tv.map ((tv)=>{
//        return  `${tv.brand} ${tv.type} - ${tv.name}`
//     });
// }
//
// const result4b = getTVName(inventory)
// console.log(result4b);
function getTVName(tv) {
    return `${tv.brand} ${tv.type} - ${tv.name}`;
}

const tv = inventory[0];
const result4a = getTVName(tv);
console.log(result4a);

// opdracht 4b

function getPrice(tv) {
    return `€ ${tv.price}, -`
}

const result4b = getPrice(tv);
console.log(result4b);

// opdracht 4c
// eerst een for loop genereren
// omrekenen van inch naar cm, 1 inch is 2.54 cm
// afronden naar een rond getal met Math.round
// string schrijven in het aangegeven format

function getSizes(size) {
    return size.map((size) => {
        return `${size.availableSizes} inches (${size.availableSizes * 2.54 } cm) | `
    }
)}


const result4c = getSizes (inventory)
console.log(result4c);


