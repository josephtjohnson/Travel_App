async function handleSubmit(event) {
    event.preventDefault()

    let city = document.querySelectorAll('input[id=location]');
    let startDate = new Date(document.querySelectorAll('input[id=s-date]'));
    let endDate = new Date(document.querySelectorAll('input[id=e-date]'));
    let tripLength = ((endDate.getTime() - startDate.getTime()) / 86400000);

    //verify a city was put into the form field
    if (Client.checkForCity(city)) {
        //post user input
        try {
              const response = await fetch('http://localhost:8081/coords', {
                  method: 'POST', // *GET, POST, PUT, DELETE, etc.
                  credentials: 'same-origin',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({'city: ' city}), // body data type must match "Content-Type" header
            });
            .then(results => async () =>{
                const response = await fetch('http://localhost:8081/display');
                try {
                    const alldata = await response.json();
                    document.getElementById('city').insertAdjacentHTML(beforeend, alldata.city+','+alldata.country );
                    document.getElementById('start-date').insertAdjacentHTML(beforeend, startDate );
                    document.getElementById('end-date').insertAdjacentHTML(beforeend, endDate );
                    document.getElementById('trip-length').insertAdjacentHTML(beforeend, tripLength );
                    document.getElementById('c-temp').insertAdjacentHTML(beforeend, alldata.temp );
                    document.getElementById('c-cond').insertAdjacentHTML(beforeend, alldata.conditions );
                }
            })
        } catch(e) {
            return e;
        };
    };
    else {
        alert('City cannot be null');
    };
};

function clearForm(event) {
    event.preventDefault();
    document.getElementById('city').innerHTML = 'Destionation: ';
    document.getElementById('start-date').innerHTML = 'Departure Date: ';
    document.getElementById('end-date').innerHTML = 'Return Date: ';
    document.getElementById('trip-length').innerHTML = 'Trip Length: ';
    document.getElementById('c-temp').innerHTML = 'Current Temperature: ';
    document.getElementById('c-cond').innerHTML = 'Current Conditions: ';
}
//add event listener and then add method to update UI
document.querySelectorAll('button[type=Add]');.addEventListener("click", handleSubmit);
document.querySelectorAll('button[type=Remove]');.addEventListener("click", clearForm);

export { handleSubmit };
export { clearForm };
