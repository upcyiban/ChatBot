let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let entertain = require('../../../lib/dialogs/entertain')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('entertain')
})

bot.dialog('entertain',entertain)

app.listen(8080,()=>{console.log('application is running on port 8080')})