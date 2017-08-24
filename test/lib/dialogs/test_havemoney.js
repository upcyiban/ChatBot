let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let havemoney = require('../../../lib/dialogs/havemoney')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('havemoney')
})

bot.dialog('havemoney',havemoney)

app.listen(8080,()=>{console.log('application is running on port 8080')})