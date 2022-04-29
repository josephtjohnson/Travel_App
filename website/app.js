// Personal API Key for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const apiKey = '&appid=e8689896ee7ef28614e88a31b9c1e306&units=imperial';
let d = new Date();
let newDate = d.getMonth()+1+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', weatherData);

/* Function called by event listener */
function weatherData(e) {
  const zipcode = document.getElementById('zip').value;
  const userInput = document.getElementById('feelings').value;
  if (zipcode.length < 5) {
      alert('Please enter a valid zipcode');
      return;
  }
  retrieveApi(url, zipcode, apiKey)
  .then(function(data) {
    postData('/add', {
      date: newDate,
      city: data.city.name,
      temperature:data.list[0].main.temp,
      content:userInput
    })
  })
  .then(function(data){
      retrieveData();
  })
}

/* Function to GET Web API Data*/
const retrieveApi = async (url, zipcode, apiKey) => {
    const response = await fetch(url+zipcode+apiKey);
    //console.log('API contact made...');
    try {
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log('Error', error);
    }
}

/* Function to POST data */
const postData = async (url = '', data = {}) => {
  const response = await fetch (url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });

  try {
    const newData = await response.json();
    return newData;
  }
  catch(error) {
    console.log('error', error);
  }
};

/* Function to GET Project Data */
const retrieveData = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    document.getElementById('date').innerHTML = 'Date: '+allData.date;
    document.getElementById('city').innerHTML = 'City: '+allData.city;
    document.getElementById('temp').innerHTML = 'Temp(F): '+Math.round(allData.temperature)+' degrees';
    document.getElementById('content').innerHTML = 'Feelings: '+allData.feelings;
  }
  catch(error) {
    console.log('Error', error);
  }
};
