let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let Community = require('../../../lib/dialogs/Community')//引入
let showShirts = require('../../../lib/dialogs/showShirts')
let  showShirt2 = require('../../../lib/dialogs/showShirt2')
let  showShirt3 = require('../../../lib/dialogs/showShirt3')
let  advice = require('../../../lib/dialogs/advice')

let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

// let bot = new builder.UniversalBot(connector, (session)=>{
//     session.beginDialog('community')
// })

var LUIS_MODEL_URL = ("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4e0601bb-6599-4942-88ba-34b8c4179ee0?subscription-key=5bcd9ee5034e4f2b9238203ab8ce23da&verbose=true&timezoneOffset=0&")
var bot = new builder.UniversalBot(connector, (session)=>{
   
})


 bot.recognizer( new builder.LuisRecognizer(LUIS_MODEL_URL))
bot.dialog('community',Community).triggerAction({
    matches:"微社区"
})

bot.dialog('showShirts',showShirts)
bot.dialog('showShirt2',showShirt2)
bot.dialog('showShirt3',showShirt3)
bot.dialog('advice',advice).triggerAction({
    matches:"advice"
})

app.listen(8087,()=>{console.log('application is running on port 8087')})