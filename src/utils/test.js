const geocode = require('./geocode')

geocode('Lahti', (error, { latitude, longtitude, location }) => {
    console.log(latitude),
    console.log(longtitude),
    console.log(location)
})
