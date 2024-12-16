const submitButton = document.querySelector('#action');
console.log(submitButton);
const distanceInput = document.querySelector('#distance-km');
const ageInput = document.querySelector('#user-age');
const resultMessage = document.querySelector('#final-results');
distanceInput.value = 0
ageInput.value = 0

// inizio funzione click
submitButton.addEventListener('click', function (event) {
    event.preventDefault();

    //  Spinner load
    const spinnerEl = submitButton.querySelector('#spinner')
    const statusSpan = submitButton.querySelector('.status');
    const originalTextStatus = statusSpan.innerHTML;
    const distance = parseInt(distanceInput.value);
    const age = parseInt(ageInput.value);

    // Status base del bottone
    submitButton.disabled = true;
    spinnerEl.classList.remove('d-none')
    statusSpan.innerHTML = 'Loading...'

    // Calcolo percentuale
    const priceKm = 0.21;
    let totalPrice = distance * priceKm;

    if (age < 18) {
        totalPrice *= 0.8; // Sconto del 20% per i minorenni
    } else if (age >= 65) {
        totalPrice *= 0.6; // Sconto del 40% per gli anziani
    }

    console.log(distanceInput.value)
    console.log(ageInput.value)
    console.log({ originalTextStatus })

    const finalPrice = totalPrice.toFixed(2);

    // Counter

    setTimeout(() => {

        spinnerEl.classList.add('d-none')
        statusSpan.innerHTML = originalTextStatus
        submitButton.disabled = false;
        resultMessage.innerHTML = `${finalPrice}`;

        if (isNaN(finalPrice)) {
            resultMessage.innerHTML = "nessun prezzo stimato";
        }
        console.log("loaderTimer")
    }, "1000");

})



