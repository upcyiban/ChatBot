let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let joke = require('../../../lib/dialogs/joke')
let greeting = require('../../../lib/dialogs/greeting')
let intromoney = require('../../../lib/dialogs/intromoney')
let havemoney = require('../../../lib/dialogs/havemoney')
let usemoney = require('../../../lib/dialogs/usemoney')
let entertain = require('../../../lib/dialogs/entertain')
let riddle = require('../../../lib/dialogs/riddle')
let enddialog = require('../../../lib/dialogs/enddialog')
let contact = require('../../../lib/dialogs/contact')
let questionnair = require('../../../lib/dialogs/questionnair')
let solife = require('../../../lib/dialogs/solife')
let dinner = require('../../../lib/dialogs/dinner')
let lifeapp = require('../../../lib/dialogs/lifeapp')
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
bot.dialog('entertain',entertain).triggerAction({
    matches:'娱乐'
})
bot.dialog('riddle',riddle).triggerAction({
    matches:'猜谜语'
})
bot.dialog('havemoney',havemoney).triggerAction({
    matches:'获得网薪'
})
bot.dialog('intromoney',intromoney).triggerAction({
    matches:'网薪介绍'
})
bot.dialog('usemoney',usemoney).triggerAction({
    matches:'使用网薪'
})
bot.dialog('enddialog',enddialog).triggerAction({
    matches:'enddialog'
})
bot.dialog('contact',contact).triggerAction({
    matches:'通讯录'
})
bot.dialog('questionnair',questionnair).triggerAction({
    matches:'调查问卷'
})
bot.dialog('solife',solife).triggerAction({
    matches:'生活查询'
})
bot.dialog('dinner',dinner).triggerAction({
    matches:'舌尖上的石大'
})
bot.dialog('lifeapp',lifeapp).triggerAction({
    matches:'应用推荐'
})
app.listen(8080,()=>{console.log('application is running on port 8080')})