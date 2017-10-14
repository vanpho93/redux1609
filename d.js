const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=01cc37655736835b0b75f2b395737694&units=metric&q=';

function congPromise(a, b) {
    return new Promise((resolve, reject) => {
        const isNumbers = typeof a === 'number' && typeof b === 'number';
        if (!isNumbers) return reject(new Error('Type error'));
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        request(url, (err, response, body) => {
            if (err) return reject(err);
            resolve(+body);
        });
    });
}

// congPromise(4, '5')
// .then(tong => console.log(tong))
// .catch(error => console.log(error.message));
function getTempPromise(cityName) {
    return new Promise((resolve, reject) => {
        request(url + cityName, (err, response, body) => {
            if (err) return reject(err);
            const obj = JSON.parse(body);
            if (!obj.main) return reject(new Error('Cannot find your city'));
            resolve(obj.main.temp);
        });
    });
}

getTempPromise('e127e7817237827e87823')
.then(temp => console.log(temp))
.catch(err => console.log(err.message));

