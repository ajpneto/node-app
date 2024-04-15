const request = require('request')

const items_by_category = (address, callback) => {
    const url = address
    const options = {
        url: url,
        json: true,
        method: 'GET',
        headers: {
            'X-API-Key': 'fdkjshfhjsdfdskfdsfdcbsjdkfdsdf',
            'User-Agent': 'AENTECH'
        }
    };

    request(options, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                categories: response.body
            })
        }
    })
};

module.exports = items_by_category;
