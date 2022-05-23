const dotenv = require('dotenv');
dotenv.config({path: 'C:\\Users\\Johns\\Desktop\\Travel-project\\Travel-App\\src\\.env'
});

const geonamesApi = process.env.API_GEO;
const geonames = process.env.GEONAMES;
const weatherbitApi = process.env.API_WB;
const weatherbit = process.env.WEATHERBIT;
const pixabayApi = process.env.API_PX;
const pixabay = process.env.PIXABAY;

let locationResults = []

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
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
});

//GET response for homepage
app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

//GET response for trip details
app.get('/display', function (req, res) {
    res.send(locationResults);
});

//POST route
app.post('/trips', getTripDetails);

function getTripDetails(req, res) {
    locationResults['city'] = req.body.city;
    console.log(locationResults);

    getCoordinates(locationResults.city);
    console.log(locationResults);

    //getWeather(locationResults.lat, locationResults.lng);
    console.log(locationResults);

    //getImage(locationResults.city);
    console.log(locationResults);
}

const getCoordinates = async (city) => {
    const geoUrl = geonames + city + '&maxRows=1' + '&username=' + geonamesApi;
    console.log(geoUrl);
    console.log('geo url received');
    const coordinates = await fetch(encodeURI(geoUrl))
        .then(res => {
            JSON.stringify(res);
            console.log(res.body);
        });
        //.then(res => console.log(res));
        //.then(res => res.json())
        //.then(res => console.log(res));
        //.then(text => console.log(text));
        locationResults['lat'] = coordinates.geonames.geoname.lat;
        locationResults['lng'] = coordinates.geonames.geoname.lng;
        console.log(coordinates);
        //locationResults['lat'] = coordinates.geonames[0].lat;
        //locationResults['lng'] = coordinates.geonames[0].lng;
        //console.log(locationResults[lat]);
    };

const getWeather = async (lat, lng) => {
    //const weatherbitUrl = '${weatherbit}lat=${lat}&lon=${lon}&key={weatherbitApi}&lang=en&units=I';
    const weatherbitUrl = weatherbit + 'lat=' + lat + 'lon=' + lng + '&key=' + weatherbitApi + '&lang=en&units=I';
    console.log(weatherbitUrl);
    console.log('weather url received');
    const weatherData = await fetch(encodeURI(weatherbitUrl))
        .then(res => res.json());
        console.log(weatherData);
        locationResults['temp'] = weatherData.data.weather.temp;
        locationResults['conditions'] = weatherData.data.weather.conditions;
    };

const getImage = async (city) => {
    //const pixabayUrl = '${pixabay}key=${pixabayApi}&q=${city}&image_type=photo&category=places';
    const pixabayUrl = pixabay + 'key=' + pixabayApi + '&q=' + city + '&image_type=photo&category=places';
    console.log('pixabay url received');
    const weather = await fetch(encodeURI(pixabayUrl))
        .then(res => res.json());
        locationResults['image'] = hits[0].pageUrl;
        console.log(locationResults);
    };
