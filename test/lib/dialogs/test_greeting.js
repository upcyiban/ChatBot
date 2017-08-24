let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let greeting = require('../../../lib/dialogs/greeting')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('greeting')
})

bot.dialog('greeting',greeting)

app.listen(3844,()=>{console.log('application is running on port 8080')})