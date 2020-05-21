console.log('Loading function');
var AWS = require('aws-sdk');
var dynamo = new AWS.DynamoDB.DocumentClient();
var table = "weather";

exports.handler = function (event, context) {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    var params = {
        TableName: table,
        Item: {
            "deviceID": event.deviceID,
            "timestamp": event.timestamp,
            "location": event.location,
            "temperature": event.temperature,
            "humidity": event.humidity,
            "wind": event.wind,
            "humidity": event.humidity,
            "visibility": event.visibility,
            "precipitation": event.precipitation
        }
    };

    console.log("Adding a new IoT device...");
    dynamo.put(params, function (err, data) {
        if (err) {
            console.error("Unable to add device. Error JSON:", JSON.stringify(err, null, 2));
            context.fail();
        } else {
            console.log("Added device:", JSON.stringify(data, null, 2));
            context.succeed();
        }
    });
}