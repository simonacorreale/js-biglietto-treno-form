const submitButton = document.querySelector ('#action');
console.log (submitButton);

submitButton.addEventListener ('click', function (event) {
    event.preventDefault ();
    submitButton.disabled =true;

    submitButton.querySelector('#spinner').classList.toggle('d-none');

    const spinnerSelector = submitButton.querySelector('#spinner');
    const statusSpan = submitButton.querySelector('.status');
    const originalTextStatus = statusSpan.innerHTML;

    spinnerSelector.classList.toggle('d-none');
    statusSpan.innerHTML = 'Loading...';

    const distanceImput = document.querySelector('#distance-km');
    const ageImput = document.querySelector('#user-age');

    console.log(distanceImput)
    console.log(ageImput)
    console.log ({originalTextStatus})
    
    submitButton.disabled =false;
    spinnerSelector.classList.toggle('d-none')
    statusSpan.innerHTML = originalTextStatus;

})