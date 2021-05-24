const express = require('express')
const http = require('http')
const fs = require('fs')
const app = express()
const server = http.createServer(app)

app.get('/', function(request, response) {
    //fs.readFile('./static/main.html', function(err, data) {
    fs.readFile('./Stores/Chinese/Soohaebok.html', function(err, data) {
      if(err) {
        response.send('에러')
      } else {
        response.writeHead(200, {'Content-Type':'text/html'})
        response.write(data)
        response.end()
      }
    })
  })

server.listen(8080, function() {
    console.log('서버 실행 중..')
  })