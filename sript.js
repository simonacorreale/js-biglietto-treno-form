const submitButton = document.querySelector ('#action');
console.log (submitButton);
const distanceInput = document.querySelector('#distance-km');
const ageInput = document.querySelector('#user-age');
const resultMessage = document.querySelector ('#final-results');

console.log (resultMessage);


submitButton.addEventListener ('click', function (event) {
    event.preventDefault ();

    submitButton.disabled =true;
    submitButton.querySelector('#spinner').classList.toggle('d-none');
    const spinnerSelector = submitButton.querySelector('#spinner');
    const statusSpan = submitButton.querySelector('.status');
    const originalTextStatus = statusSpan.innerHTML;
    spinnerSelector.classList.toggle('d-none');
    statusSpan.innerHTML = 'Loading...';


    const distance = parseInt(distanceInput.value);
    const age = parseInt(ageInput.value);
  
    if (isNaN(distance) || isNaN(age) || distance <= 0 || age <= 0) {
        resultMessage.innerHTML = "nessun prezzo stimato";
        return;
        console.log (resultMessage)
    } 
    // Calcola il prezzo del biglietto
    const priceKm = 0.21;
    let totalPrice = distance * priceKm;

     if (age < 18) {
        totalPrice *= 0.8; // Sconto del 20% per i minorenni
    } else if (age >= 65) {
        totalPrice *= 0.6; // Sconto del 40% per gli anziani
    } 

    console.log(distanceInput.value)
    console.log(ageInput.value)
    console.log ({originalTextStatus})
    
    submitButton.disabled =false;
    spinnerSelector.classList.toggle('d-none')
    statusSpan.innerHTML = originalTextStatus;
    
    const finalPrice = totalPrice.toFixed(2);

    // Mostra il risultato nella UI
    resultMessage.innerHTML = `${finalPrice}`;
    return;


    
})

   

