let express =require('express')
let cors = require('cors')
let fs = require('fs')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let greeting = require('../../../lib/dialogs/greeting')
let app = express()
// let key = fs.readdirSync()
app.use(cors())
let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())
app.get('/',(req, res, next)=>{
    res.end('hello')
})

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('greeting')
})

bot.dialog('greeting',greeting)

app.listen(80,()=>{console.log('application is running on port 8080')})