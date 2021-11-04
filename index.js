// <> Global variables
var filename = "calendar.svg"

// <> Node import {  } from "module";
// <> Node require("module");
fs = require("fs");
fs.readFile(filename, "utf8", function(err, data) {
	if (err) {
		return console.log(err);
	}
	console.log(data);
} );


