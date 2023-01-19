const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('这是nodemall首页')
})

app.post('/signIn', (req, res) => {
    res.send('收到登录了')
})

app.post('/signUp', (req, res) => {
    res.send('收到注册了')
})

module.exports = app