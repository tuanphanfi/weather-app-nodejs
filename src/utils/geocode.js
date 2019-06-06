const  request  = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoidHVhbnBoYW5maSIsImEiOiJjandqMGh3eHIwemJxNDRvMmcxMTk0cjAyIn0.ZXeLwX8WbVubPbvdC9qbww&limit=1'
    request({ url, json: true }, (error, res) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if(res.body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: res.body.features[0].center[0],

                longtitude: res.body.features[0].center[1],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode