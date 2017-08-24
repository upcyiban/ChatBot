let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let riddle = require('../../../lib/dialogs/riddle')
let app = express()
// let key = fs.readdirSync()
let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())
app.get('/',(req, res, next)=>{
    res.end('hello')
})

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('riddle')
})

bot.dialog('riddle',riddle)

app.listen(8080,()=>{console.log('application is running on port 8080')})