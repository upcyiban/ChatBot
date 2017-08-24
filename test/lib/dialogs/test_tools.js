let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let tools= require('../../../lib/dialogs/tools')//引入
let toolscommon= require('../../../lib/dialogs/toolscommon')//引入
let toolsdao = require('../../../lib/dialogs/toolsdao')//引入
let toolslend = require('../../../lib/dialogs/toolslend')//引入
let toolsprise = require('../../../lib/dialogs/toolsprise')//引入
let toolsqian = require('../../../lib/dialogs/toolsqian')//引入
let toolsteach = require('../../../lib/dialogs/toolsteach')//引入
let toolswork = require('../../../lib/dialogs/toolswork')//引入

let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})

app.post('/api/messages',connector.listen())

// let bot = new builder.UniversalBot(connector, (session)=>{
//     session.beginDialog('community')
// })

var LUIS_MODEL_URL = ("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4e0601bb-6599-4942-88ba-34b8c4179ee0?subscription-key=5bcd9ee5034e4f2b9238203ab8ce23da&timezoneOffset=0&verbose=true&")
var bot = new builder.UniversalBot(connector, (session)=>{
    
})
bot.recognizer( new builder.LuisRecognizer(LUIS_MODEL_URL))
bot.dialog('tools',tools).triggerAction({
    matches:"易工具",
})

bot.dialog('toolscommon',toolscommon).triggerAction({
    matches:"辅导员评价",
})

bot.dialog('toolsdao',toolsdao).triggerAction({
    matches:"易签到",
})

bot.dialog('toolslend',toolslend).triggerAction({
    matches:"物资借用",
})

bot.dialog('toolsprise',toolsprise).triggerAction({
    matches:"易抽奖",
})
bot.dialog('toolsqian',toolsqian).triggerAction({
    matches:"易抽签",
})

bot.dialog('toolsteach',toolsteach).triggerAction({
    matches:"教务系统",
})
bot.dialog('toolswork',toolswork).triggerAction({
    matches:"就业信息",
})



// bot.dialog("hello",tools).triggerAction({
//     matches:"打招呼"
// })


app.listen(8082,()=>{console.log('application is running on port 8082')})