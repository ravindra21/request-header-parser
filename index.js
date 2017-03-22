var express = require('express')
var app = express()
var port = process.env.PORT || 3000

app.get('/',function(req,res){
	var msg = 'Hi!, Welcome to timestamp microservice api. Enjoy.'
	var msg2 = 'example url "'+__dirname
	res.send(msg+'\n'+msg2)
})

app.get('/:timestamp',function(req,res){
	var timestamp = req.params.timestamp
	res.json(getTimestamp(timestamp))
})

app.listen(port,function(){ console.log('app running on port'+port) })

function getTimestamp(ts){
	var result = {unix:null,natural:null}
	var date;

	date = isNaN(ts) ? new Date(ts) : new Date(parseInt(ts))
	if(!isNaN(date.getTime())){
		result.unix = date.getTime()
		result.natural = getNaturalDate(date)
	}
	return result
}

function getNaturalDate(dt){
	var ret=''
	var months = ['January','February','March','April','May','June','July','August','September','October','November','December']

	ret = months[dt.getMonth()]+' '+dt.getDate()+', '+dt.getFullYear()

	return ret
}