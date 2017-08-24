
let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let dinner = require('../../../lib/dialogs/dinner')
let kuaida = require('../../../lib/dialogs/kuaida')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
let luisAppUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e8704174-630f-4a65-a018-7c634758321c?subscription-key=e6e5627b25f04e8fb05e3dffad6120a3&timezoneOffset=0&verbose=true&q='

app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    // session.beginDialog('dinner')
    session.send('hi')
})
bot.recognizer(new builder.LuisRecognizer(luisAppUrl))

bot.dialog('dinner',dinner).triggerAction({
    matches:'吃饭'
})
bot.dialog('kuaida',kuaida).triggerAction({
    matches:'快搭'    
})
app.listen(8080,()=>{console.log('application is running on port 8080')})