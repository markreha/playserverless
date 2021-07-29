const { Database } = require('../common/database.js')
const { WeatherSensorModel } = require('../common/models.js')
const { ResponseDataModel } = require('../common/models.js')
const { authentication } = require('../common/security.js')

module.exports = async function (context, req) 
{
    context.log('Weather Get HTTP trigger function processed a request.');

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

    // Get Device ID, From Date, and To Date from the Request Parameters
    var device = req.query.device;
    var from = req.query.from;
    var to = req.query.to;

    // Convert input From and To Dates to ISO format and account for US/Arizona Time Zone
    var fromDate = new Date(from);
    fromDate.setHours(fromDate.getHours() - fromDate.getTimezoneOffset()/60);
    var toDate = new Date(to);
    toDate.setHours(toDate.getHours() - toDate.getTimezoneOffset()/60);

    // Process IoT request params
    if(device !== "" && from !== "" && to !== "")
    {
        // Query the database by device and date range
        var database = new Database();
        var dbdata = await database.findByDateRange(parseInt(device), fromDate, toDate);

         // Send the Reponse back to the client
        var status = 200;
        var message = "";
        var data = null;
        if(typeof dbdata === "string")
        {
            // Return Error
            status = 400;
            message = dbdata;
            data = null;
        }
        else
        {
            // Iternate over the result and return a list of WeatherSensorModel Object Models
            weatherData = [];
            for (let data of dbdata)
            {
                weatherData.push(new WeatherSensorModel(data.deviceID, data.temperature, data.humidity, data.pressure, data.date));
            }

            // Return OK
            status = 200;
            message = "OK";
            data = weatherData;
        }
        var responseModel = new ResponseDataModel(status, message, data);
        context.res = 
        {
            // Return OK with the Response Data Model
            status: 200,
            body: JSON.stringify(responseModel)
        };
    }
    else
    {
        // No IoT Requested Data so sent error back to the client
        var responseDataModel = new ResponseDataModel(400, "Please pass a device ID, from date, and to date in the request parameters", null);
        context.res = 
        {
            // Return Error with the Response Data Model
            status: 400,
            body: JSON.stringify(responseDataModel)
        };
    }
}