// Eerst kijken welke array methode is er nodig. in dit geval map.
// Een map methode loopt hele 'inventory' array en roept voor elke object de callback (typeTV.type) functie aan.

const typeTV = inventory.map((typeTV) => {
    return typeTV.type
});

console.log(typeTV);

// in de vraag staat hele objecten dan zal ik gebruik maken van de filter methode.
// een tv is uitverkocht als verkochte gelijk is aan voorraad

const soldOutTV = inventory.filter((sold) => {
    return sold.sold === sold.originalStock
});

console.log(soldOutTV)

const yesToAmbiLight = inventory.filter((ambi) => {
    return ambi.options.ambiLight === true
});

console.log(yesToAmbiLight);

const price = inventory.sort((a, b) => a.price - b.price)

console.log(inventory)

