const express    = require('express'),
	  app        = express(),
	  fs         = require('fs'),
	  logger     = require("morgan"),
	  nodemailer = require('nodemailer'),
	  mg         = require('nodemailer-mailgun-transport'),
	  bodyParser = require('body-parser'),
	  nconf      = require('nconf'),
	  path       = require('path'),
	  favicon    = require('serve-favicon'),
	  http       = require('http'),
	  auth       = { "auth": {
        				"api_key": process.env.API_KEY,
        				"domain": process.env.DOMAIN
        				}
        			};

// Serve static js and css from /public
app.use(express.static(__dirname + '/public'));
// Favicon
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// Body parser
app.use(bodyParser.urlencoded({ extended: true }));

// ROOT Route
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

// http POST /contact
app.post("/", (req, res) => {
	let name = req.body.name;
	let email = req.body.email;
	let message = req.body.message;

	// create transporter object capable of sending email using the default SMTP transport
	const transporter = nodemailer.createTransport(mg(auth));

	// setup e-mail data with unicode symbols
	let mailOptions = {
		from: email, // sender address
		name: name,
		to: 'jacobwylie@gmail.com', // list of receivers
		subject: 'Message from Portfolio Contact page', // Subject line
		text: message
	};
	
	// send mail with defined transport object
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
	  		console.log('\nERROR: ' + error+'\n');
	  		res.redirect('back');
	  		
		} else {
	    	// console.log('\nRESPONSE SENT: ' + info.response+'\n');
	  		res.redirect('back');
		}
	});

});


// Set which port your app will run on: PORT=<whichever port you like>
// Connect to server specific port or 8080 if none specified
const port = process.env.PORT || 8080
app.listen(port, process.env.IP, () => {
	console.log(`App is running on port: ${port}`);
})

// http.createServer(function (req, res) {
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// }).listen(8080, 'localhost');
// console.log('Server running at http://localhost:8080/');















