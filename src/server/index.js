const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\Travel-project\\Travel-App\\src\\.env'
});

const geonamesApi = process.env.API_GEO;
const geonames = process.env.GEONAMES;
const weatherbitApi = process.env.API_WB;
const weatherbit = process.env.WEATHERBIT;
const pixabayApi = process.env.API_PX;
const pixabay = process.env.PIXABAY;

let locationResults = {};

// Express to run server and routes
const express = require('express');
const fetch = require('node-fetch');

// Start up an instance of app
const app = express();
app.use(express.static('dist'))

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

//designates what port the app will listen to for incoming requests
app.listen(8091, function () {
    console.log('Example app listening on port 8091!')
});

//GET response for homepage
app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

//GET response for trip details
app.get('/display', function (req, res) {
    res.send(locationResults);
});

const getTripDetails = async (req, res) => {
    locationResults['city'] = req.body.city
    await getCoordinates(locationResults.city);
    await getWeather(locationResults.lat, locationResults.lng);
    await getImage(locationResults.city);
    console.log(locationResults);
    res.send("POST request complete!");
};

const getCoordinates = async (city) => {
    const geoUrl = geonames + city + '&maxRows=1'  + '&type=json' + '&username=' +  geonamesApi;
    const coordinates = await fetch(encodeURI(geoUrl))
        .then(res => res.json());
    locationResults['lat'] = coordinates.geonames[0].lat;
    locationResults['lng'] = coordinates.geonames[0].lng;
    console.log(locationResults);
    };

const getWeather = async (lat, lng) => {
    const weatherbitUrl = weatherbit + 'lat=' + lat + '&lon=' + lng + '&key=' + weatherbitApi + '&lang=en&units=I&days=1';
    const weatherData = await fetch(encodeURI(weatherbitUrl))
        .then(res => res.json());
        locationResults['temp'] = weatherData.data[0].temp;
        locationResults['conditions'] = weatherData.data[0].weather.description;
    };

const getImage = async (city) => {
    const pixabayUrl = pixabay + 'key=' + pixabayApi + '&q=' + city + '&image_type=photo&category=places';
    const images = await fetch(encodeURI(pixabayUrl))
        .then(res => res.json());
        console.log(images.total);
        if (images.total == 0) {
            locationResults['image'] = 'https://globalcastaway.com/wp-content/uploads/2019/11/adventure-quotes-jobs-fill-your-pockets-but-adventure-fill-your-soul.jpg';
        }
        else {
            locationResults['image'] = images.hits[0].largeImageURL;
        };
    };

//POST route
app.post('/trips', getTripDetails);
