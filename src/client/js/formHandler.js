async function handleSubmit(event) {
    event.preventDefault();
    //Remove error message if it exists
    if(document.querySelector('.error-msg')) {
        document.querySelector('.error-msg').remove();
    }
    let city = document.getElementById('location').value;
    let startDate = document.getElementById('s-date').valueAsDate;
    let endDate = document.getElementById('e-date').valueAsDate;
    //let startDate = new Date(document.getElementById('s-date').valueAsDate);
    //let endDate = new Date(document.getElementById('e-date').valueAsDate);
    let tripLength = (endDate - startDate)/86400000;


    //verify a city was put into the form field
/*
    if (!Client.checkForCity(city)) {
        let div = document.createElement("div");
        console.log(div);
        div.classList.add("error-msg");
        console.log(div);
        div.innerHTML += "Please enter a valid city";
        console.log(div);
        let top = document.getElementsByClassName("headline")[0];
        console.log(top);
        document.getElementById('app').insertBefore(div, top);
        clearForm();
    }
    else if(!Client.checkForDate(start, end)) {
        let div = document.createElement("div");
        console.log(div);
        div.classList.add("error-msg");
        console.log(div);
        div.innerHTML += "Please enter a valid date format MM/DD/YYYY";
        console.log(div);
        let top = document.getElementsByClassName("headline")[0];
        console.log(top);
        document.getElementById('app').insertBefore(div, top);
        clearForm();
    }
    else {
    */
    if(inputValidation(city, startDate, endDate)) {
        try {
            const request = await fetch('http://localhost:8091/trips', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({city: city}), // body data type must match "Content-Type" header
            });
        updateUI(city, startDate, endDate, tripLength);
        } catch(e) {
            console.log('TESTING TESTING TESTING', e);
        };
    };
};

function clearForm() {
    event.preventDefault();
    document.getElementById('location').innerHTML = ''
    document.getElementById('s-date').innerHTML = ''
    document.getElementById('e-date').innerHTML = ''
    document.getElementById('city').innerHTML = 'Destination:';
    document.getElementById('start-date').innerHTML = 'Departure Date:';
    document.getElementById('end-date').innerHTML = 'Return Date:';
    document.getElementById('trip-length').innerHTML = 'Trip Length:';
    document.getElementById('c-temp').innerHTML = 'Current Temperature:';
    document.getElementById('c-cond').innerHTML = 'Current Conditions:';
    const img = document.getElementById('city-image');
    img.style.backgroundImage = 'none';
    img.style.border = '1px solid black';
};

function inputValidation(city,  startDate, endDate) {
    event.preventDefault();
    let div = document.createElement("div");
    div.classList.add("error-msg");
    let top = document.getElementsByClassName("headline")[0];
    document.getElementById('app').insertBefore(div, top);

    if (!Client.checkForCity(city)) {
        div.innerHTML += "PLEASE ENTER A VALID CITY";
        clearForm();
        return;
    }
    else if (!Client.chronos(startDate, endDate)) {
        div.innerHTML += "DEPARTURE DATE MUST BE BEFORE RETURN DATE";
        clearForm();
        return;
    }
    else {
        document.getElementsByClassName('error-msg')[0].remove();
        return true;
    };
};

async function updateUI(city, startDate, endDate, tripLength) {
    const response = await fetch('http://localhost:8091/display');
    const tripDets = await response.json();
    document.getElementById('city').innerHTML = "Destination: " + city;
    document.getElementById('start-date').innerHTML = "Departure Date: " + startDate.getMonth() + '/'
    + startDate.getDate() + '/' + startDate.getFullYear();
    document.getElementById('end-date').innerHTML = "Return Date: " + endDate.getMonth() + '/'
    + endDate.getDate() + '/' + endDate.getFullYear();
    document.getElementById('trip-length').innerHTML = "Trip Length: " + tripLength + " days";
    document.getElementById('c-temp').innerHTML = "Current Temperature: " + tripDets.temp + "\u00B0 F";
    document.getElementById('c-cond').innerHTML = "Current Conditions: " + tripDets.conditions;
    const img = document.getElementById('city-image');
    img.style.backgroundImage = 'url(' + tripDets.image + ')';
    img.style.border = 'none';
    console.log(img.style.backgroundImage);
};

export { handleSubmit };
export { clearForm };
