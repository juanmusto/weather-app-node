const city = require('./city/city');
const weather = require('./weather/weather');

const argv = require('yargs').options({
    city: {
        demand: true,
        description: "City to find weather",
        alias: 'c'
    }
}).argv;

const getInfo = async (c) => {

    try {
        const infoCity = await city.getLatLon(c);
        const weatherCity = await weather.getWeather(infoCity.lat, infoCity.lon);
        return `The weather in ${c} is ${weatherCity}`;
    }
    catch {
        return `Can't find the city ${c}`;
    }
}

getInfo(argv.c)
    .then(console.log)
    .catch(console.log)