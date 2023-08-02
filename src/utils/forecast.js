const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e873553e6c05cd3a99578651ff9731cd&query='+latitude+','+longitude;
    //const url = 'http://api.weatherstack.com/current?access_key=e873553e6c05cd3a99578651ff9731cd&query=53.5461,-113.4937';
    
    request({url, json: true}, (error, { body }) => {
        
        if (error){
            callback('Unable to use weather service', undefined)
        } else if (body.error){
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, 
                'Temperature is at ' + body.current.temperature + ' degree' + ', and it feels like ' + body.current.feelslike + ' degree'+'. The weather is now ' + body.current.weather_descriptions + ' at ' +body.current.observation_time
                // temperature : body.current.temperature,
                // feelsLike : body.current.feelslike,
                // weatherDesc : body.current.weather_descriptions,
                // time: body.current.observation_time
            )
        }
    })
}

module.exports = forecast