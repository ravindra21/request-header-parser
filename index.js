var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.get('/api/whoami',function(req, res){
	res.json(getParsedHeader(req))
})

app.listen(port,function(){ console.log('app listen on port'+port) })

function getParsedHeader(req){
	var os = req.headers["user-agent"].split(/[\(\)]/)[1]
	var lang = req.headers["accept-language"].split(',')[0]
	var ip = req.connection.remoteAddress
	//ip = ip.indexOf(':') >= 0 ? ip.split(':').reverse()[0] : ip

	var result = {
		ipaddress: ip,
		language: lang,
		software: os
	}

	return result
}