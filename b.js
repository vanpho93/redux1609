const request = require('request');

// request('http://vnexpress.net', (err, response, body) => {
//     if (err) return console.log(err.message);
//     console.log(body);
// });
const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

request(url + 'TOkyo', (err, response, body) => {
    const obj = JSON.parse(body);
    console.log(obj.main.temp);
});
