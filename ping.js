// Coded & Licensed to DDI Development
// This code may not be redistrubited and claimed as your own.

// Email: support@ddidevelopment.com
// Discord: https://discord.ddidevelopment.com



var request = require('request');
var http = require('http');
var requestLoop = setInterval(function(){
	request({
		url: "LINK HERE",
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	},function(error, response, body){
		if(!error && response.statusCode == 200){
			console.log('United YT - Main Ping Sent Successfully');
		}else{
			console.log('United YT - Main Ping Sent Error' + response.statusCode);
		}
	});
  }, 60000);

  var requestLoop = setInterval(function(){
	request({
		url: "LINK HERE",
		method: "GET",
		timeout: 10000,
		followRedirect: true,
		maxRedirects: 10
	},function(error, response, body){
		if(!error && response.statusCode == 200){
			console.log('United YT - Moderation Ping Sent Success');
		}else{
			console.log('Untied YT - Moderation Ping Sent Error' + response.statusCode);
		}
	});
  }, 60000);

  
