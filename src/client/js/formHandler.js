async function handleSubmit(event) {
    event.preventDefault();
    //Remove error message if it exists
    if(document.querySelector('.error-msg')) {
        document.querySelector('.error-msg').remove();
    }
    let city = document.getElementById('location').value;
    let start = document.getElementById('s-date').value;
    let end = document.getElementById('e-date').value;
    let startDate = new Date(document.getElementById('s-date').value);
    let endDate = new Date(document.getElementById('e-date').value);
    let tripLength = ((endDate.getTime() - startDate.getTime()) / 86400000);


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
    if(inputValidation(city, start, end, startDate, endDate)) {
        try {
            const request = await fetch('http://localhost:8081/trips', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({city: city}), // body data type must match "Content-Type" header
            });
        updateUI(city, start, end, tripLength);
        } catch(e) {
            console.log("error", e);
        };
    };
};

function clearForm() {
    event.preventDefault();
    document.getElementById('city').innerHTML = 'Destination:';
    document.getElementById('start-date').innerHTML = 'Departure Date:';
    document.getElementById('end-date').innerHTML = 'Return Date:';
    document.getElementById('trip-length').innerHTML = 'Trip Length:';
    document.getElementById('c-temp').innerHTML = 'Current Temperature:';
    document.getElementById('c-cond').innerHTML = 'Current Conditions:';
};

function inputValidation(city, start, end, startDate, endDate) {
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
    else if (!Client.checkForDate(start, end)) {
        div.innerHTML += "DATE FORMAT MUST BE MM/DD/YYYY";
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

async function updateUI(city, start, end, tripLength) {
    const response = await fetch('http://localhost:8081/display')
        .then(res => res.json());
    console.log('UI update in progress');
    const alldata = await response.json();
    console.log(alldata);
    document.getElementById('city').insertAdjacentHTML(beforeend, city );
    document.getElementById('start-date').insertAdjacentHTML(beforeend, start );
    document.getElementById('end-date').insertAdjacentHTML(beforeend, end );
    document.getElementById('trip-length').insertAdjacentHTML(beforeend, tripLength );
    document.getElementById('c-temp').insertAdjacentHTML(beforeend, alldata.temp );
    document.getElementById('c-cond').insertAdjacentHTML(beforeend, alldata.conditions );
};

//add event listener and then add method to update UI
document.querySelector('button[type=Add]').addEventListener("click", handleSubmit);
document.querySelector('button[type=Remove]').addEventListener("click", clearForm);

export { handleSubmit };
export { clearForm };
