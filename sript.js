
// Punto 1
const distance = parseFloat(prompt("Quanti chilometri vuoi percorrere?"));
const age = parseInt(prompt("Definisci la tua età 👵🏻👩🏻"));
// Punto 2
if (isNaN(distance) || isNaN(age) || distance <= 0 || age <= 0) {
    alert("Errore: la tua età o il numero di KM percorsi non possono corrispondere a zero 🤯 "); 
} else {
// Punto 3
    const priceKm = 0.21;
    let totalPrice = distance * priceKm; 
// Punto 4
    if (age < 18) {
        totalPrice *= 0.8;
    } else if (age >= 65) {
        totalPrice *= 0.6; 
    }
 // Punto 5
    const finalPrice = totalPrice.toFixed(2);

 // Punto 6
    alert(`Il tuo prezzo è: €${finalPrice}`);
    console.log(`Il tuo prezzo è €${finalPrice}`);
}
