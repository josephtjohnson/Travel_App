function handleSubmit(event) {
    event.preventDefault()

    let city = document.getElementById('city');

    //verify a city was put into the form field
    if (Client.checkForCity(city)) {
        fetch ('http://localhost:8081/coords', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({'city: ' city})
        });
        .then(res => res.json());
    }
};

//add event listener and then add method to update UI
export { handleSubmit };
