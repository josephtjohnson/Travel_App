// Personal API Key for OpenWeatherMap API
const url = 'http://api.openweathermap.org/data/2.5/forecast?';
const zip = 'zip=';
const api = '&appid=';
const apiKey = '<e8689896ee7ef28614e88a31b9c1e306>&units=imperial';
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', weatherData);

/* Function called by event listener */
function weatherData(e) {
  const zipcode = document.getElementById('zip').value;
  const userInput = document.getElementById('feelings').value;
  retrieveApi(url, zip, zipcode, api, apiKey)
  .then(function(data) {
    console.log(data);
    postData('/all', {
      date:newDate,
      temperature:data.main.temp,
      content:userInput
    })
  });
  .then(retrieveData());
}

/* Function to GET Web API Data*/
const retrieveApi = async (url, zip, zipcode, api, apiKey) {
  const request = await fectch(url+zip+zipcode+api+apiKey);
  try {
    const data = await response.json()
    return data;
  } 
  catch {
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
    console.log('Error', error);
  }
};


/* Function to GET Project Data */
const retrieveData = async () => {
  const request = await fetch('/all');
  try {
    const allData = await.request.json();
    console.log(allData);
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temperature;
    document.getElementById('date').innerHTML = allData.content;
  }
  catch(error) {
    console.log('Error', error);
  }
};
