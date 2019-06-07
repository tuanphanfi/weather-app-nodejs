const request = require('request')



let message = '';
function returnMessage(temp, chanceOfRain) {
    return message = `<br>It is currently ${temp} degrees out. There is a ${chanceOfRain} % of rain.`;
    // console.log(message)
}

function fToC(fDegree) {
    return c = Math.floor((fDegree - 32) * 5 / 9)

}
const forecast = (latitue, longitude, callback) => {



    const url = 'https://api.darksky.net/forecast/0ce65453550464c1a43dad1c58e24df5/' + encodeURIComponent(latitue) + ',' + encodeURIComponent(longitude) + '?lang=en'
    request({ url, json: true }, (error, { body }) => {
        // var message = returnMessage(fToC(body.currently.temperature), body.currently.precipProbability)
        var message = returnMessage(fToC(body.currently.apparentTemperature - 27), body.currently.precipProbability)
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + message)

            // console.log(body.currently.apparentTemperature)
            // console.log(body.daily.data[0].summary)
            // console.log(`${latitue}, ${longitude}`)
        }
    })

}


module.exports = forecast

