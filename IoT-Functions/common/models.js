
// ***** Object Model Classes *****

//  Weather Sensor IoT Data Model
class WeatherSensorModel
{
    // Constructor
    constructor(deviceID, temperature, humidity, pressure, date)
    {
	    this.deviceID = deviceID;
	    this.temperature = temperature;
	    this.humidity = humidity;
	    this.pressure = pressure;
	    this.date = date;
    }
};
//  Response Model
class ResponseModel 
{
    // Constructor
    constructor(status,message) 
    {
        this.status=status;
        this.message=message;
    }
};
//  Response Data Model
class ResponseDataModel 
{
    // Constructor
    constructor(status,message,data) 
    {
        this.responseModel=new ResponseModel(status,message);
        this.data=data;
    }
};

exports.WeatherSensorModel = WeatherSensorModel
exports.ResponseModel = ResponseModel
exports.ResponseDataModel = ResponseDataModel