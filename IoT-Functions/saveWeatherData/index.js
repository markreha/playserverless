const { Database } = require('../common/database.js')
const { WeatherSensorModel } = require('../common/models.js')
const { ResponseModel } = require('../common/models.js')
const { authentication } = require('../common/security.js')

module.exports = async function (context, req) 
{
    context.log('Weather Save HTTP trigger function processed a request.');

     // Authenticate the Request
     var authenticated = authentication(req.headers.authorization);
     if(!authenticated)
     {
         context.res = 
         {
             // Return Authentication failed response
             status: 401,
             body: "Authentication failed"
         };
         context.done();
         return;
     }

     // Process IoT Posted data
    if(req.body)
    {
        // Get IoT Posted data (need to validate in the future)
        var iot = req.body;
        var date = new Date();
        var weatherSensorModel = new WeatherSensorModel(iot.deviceID, iot.temperature, iot.humidity, iot.pressure, date);

        // Save in the database
        var database = new Database();
        var err = await database.insert(weatherSensorModel);
 
        // Send the Reponse back to the client
        var responseModel = new ResponseModel(err === "" ? 1 : 0, err === "" ? "OK" : ("Error: " + err));
        context.res = 
        {
            // Return OK with the Response Model
            status: 200,
            body: JSON.stringify(responseModel)
        };
    }
    else
    {
        // No IoT Posted Data so sent error back to the client
        var responseDataModel = new ResponseModel(400, "Please pass a name in the request body");
        context.res = 
        {
            // Return Error with the Response Model
            status: 400,
            body: JSON.stringify(responseDataModel)
        };
    }
 }
