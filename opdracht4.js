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

const tv1 = inventory[0];
const result4a = getTVName(tv1);
console.log(result4a);

// opdracht 4b

function getPrice(tv) {
    return `€ ${tv.price}, -`
}

const result4b = getPrice;
console.log(result4b);

// opdracht 4c
// eerst een for loop genereren
// omrekenen van inch naar cm, 1 inch is 2.54 cm
// afronden naar een rond getal met Math.round
// string schrijven in het aangegeven format

function getSizes(size) {
    return size.availableSizes.map((size) => {
        return `${size.availableSizes} inches (${Math.round(size.availableSizes * 2.54)} cm)`
    }).join('|')
}

const result4c = getSizes(inventory)
console.log(result4c);

// hij werkt helaas nog niet.


// opdracht 4d

const tv = inventory.find((tv) => tv.name === "43PUS6504/12");
const name = getTVName(tv);
const price = getPrice(tv);
const screenSizes = getSizes(tv);

const philips = `${name} - 4K TV
${price}
${screenSizes}`;

console.log(philips);

// opdracht 4e

const output = inventory.map((tv) => {
    const name = getTVName(tv);
    const price = getPrice(tv);
    const screenSizes = getSizes(tv);

    return `${name} 
${price}
${screenSizes}`;
});

console.log(output);
