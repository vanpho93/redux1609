const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

// request(url + 'TOkyo', (err, response, body) => {
//     const obj = JSON.parse(body);
//     console.log(obj.main.temp);
// });

function getTempByCityName(cityName, cb) {
    request(url + cityName, (err, response, body) => {
        if (err) return cb(err, null);
        const obj = JSON.parse(body);
        cb(null, obj.main.temp);
    });
}

getTempByCityName('Tokyo', (err, temp) => {
    if (err) return console.log(err.message);
    console.log(temp);
});

// getTempByCityName('Tokyo', temp => console.log('Tokyo: ' + temp));
// getTempByCityName('Tokyo', temp => console.log('Tokyo is now ' + temp));
