// opdracht 3a
// ik denk dat ik gebruik moet maken van map methode.
// daarna pas ik document.getElementByID toe om het zichtbaar te maken op de website
// ook nu geeft brandTV een groene underline waarom?

const brandTV = inventory.map((tv) => {
    return tv.brand
})

console.log(brandTV);

const opdracht3a = document.getElementById('opdracht3a')
opdracht3a.textContent = brandTV;

// opdracht 3b

// function getTVBrands(inventoryArray) {
//      return inventoryArray.map((tv) => {
//         return tv.brand
//     })
// }


function getTVBrands(inventoryArray) {
    return inventoryArray.map(tv => tv.brand)
}


const opdracht3b = getTVBrands(inventory)
console.log(opdracht3b);