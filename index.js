var AWS = require("aws-sdk");
var multipart = require("parse-multipart");
var ses = new AWS.SES();

var RECEIVER = "robin.duckett@gmail.com";
var SENDER = "website@nestlettingsltd.co.uk";
var SENDER = "robin.duckett@gmail.com";

const headers = {
  "Content-Type": "text/html",
  Location: "https://nestlettingsltd.co.uk/thanks",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "OPTIONS, POST",
  "Access-Control-Allow-Headers": "Content-Type, Location",
};

var logt = "";

function log(txt) {
  logt += txt;
  logt += "\n";
}

exports.handler = function (event, context) {
  log("Received event:", event);

  var isMultipart =
    event.headers["Content-Type"].split(" ")[0] === "multipart/form-data;";

  if (isMultipart === true) {
    var boundary = event.headers["Content-Type"]
      .split(" ")[1]
      .replace("boundary=", "");

    var body = Buffer.from(event.body, "base64");
    var parts = multipart.Parse(body, boundary);

    for (var i = 0; i < parts.length; i++) {
      var part = parts[i];

      log(part);
    }

    sendEmail(event, logt, function (err, data) {
      context.succeed({ statusCode: 301, body: "all done", headers });
    });
  } else {
    sendEmail(event, logt, function (err, data) {
      context.succeed({ statusCode: 301, body: "all done", headers });
    });
  }
};

function sendEmail(event, logtext, done) {
  var params = {
    Destination: {
      ToAddresses: [RECEIVER],
    },
    Message: {
      Body: {
        Text: {
          Data: JSON.stringify(event, null, 2) + "\n" + logtext,
          Charset: "UTF-8",
        },
      },
      Subject: {
        Data: "Website Referral Form: " + event.name,
        Charset: "UTF-8",
      },
    },
    Source: SENDER,
  };
  ses.sendEmail(params, done);
}
