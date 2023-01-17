const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors()) // HTML 요청시 보안상의 블록킹을 예외처리해주는것

//2022.12.13 코딩애플 강의
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get('/user/:id', function (req, res) {
// const q = req.params


// console.log(q.id)
const p = req.query
console.log(p)

res.send({'message':'Hello World!!!'})
})

app.get('/dog', function (req, res) {
    res.send({'sound':'멍멍'})
})

app.get('/cat', function (req, res) {
    res.send({'sound':'야옹'})
})

app.get('/beauty', function(req, res) {
    res.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.')
})


app.listen(3000)