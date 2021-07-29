
const MongoClient = require('mongodb').MongoClient;

// ****** Database Helper Class *****

class Database
{
    constructor()
    {
        this.mongodb_url = "mongodb+srv://[REPLACE ME]:[REPLACE ME]@c[REPLACE ME]/[REPLACE ME]?retryWrites=true&w=majority";
    }

    // Insert Weather Data into database
    async insert(data)
    {
        // Create MongoDB Client, connect, and insert a Weather IoT document into the Weather Collection
        const client = new MongoClient(this.mongodb_url, { useUnifiedTopology: true } );
        try
        {
            await client.connect();
            await client.db("iot").collection("weather").insertOne(data); 
            return "";
        }
        catch (e) 
        {
            return e.message;
        }
        finally 
        {
            client.close();
        }
    }

    async findByDateRange(device, from, to)
    {
        // Create MongoDB Client, connect, and query a Weather IoT document from the Weather Collection based on device, from date, and to date
        const client = new MongoClient(this.mongodb_url, { useUnifiedTopology: true } );
        try
        {
            await client.connect();
            var data = await client.db("iot").collection("weather").find({"deviceID": device, "date": { $gte: from , $lte: to }}).toArray(); 
            return data;
        }
        catch (e) 
        {
            return e.message;
        }
        finally 
        {
            client.close();
        }
    }
};

exports.Database = Database