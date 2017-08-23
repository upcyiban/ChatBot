let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let joke = require('../../../lib/dialogs/joke')
let greeting = require('../../../lib/dialogs/greeting')
let app = express()
let luisAppUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/da682d24-6c13-45d3-a22a-0a17258c92ed?subscription-key=627502f91f1c459f84df8ea1c2ad3fda&timezoneOffset=0&verbose=true&q='

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('joke')
})
bot.recognizer(new builder.LuisRecognizer(luisAppUrl))
bot.dialog('joke',joke).triggerAction({
    matches:'讲笑话'
})
bot.dialog('greeting',greeting).triggerAction({
    matches:'打招呼'
})

app.listen(8080,()=>{console.log('application is running on port 8080')})