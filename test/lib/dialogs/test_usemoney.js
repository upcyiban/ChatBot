let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let usemoney = require('../../../lib/dialogs/usemoney')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('usemoney')
})

bot.dialog('usemoney',usemoney)

app.listen(8080,()=>{console.log('application is running on port 8080')})