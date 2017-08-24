let express =require('express')
let builder = require('botbuilder')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.send('this is test example')
})


app.listen(8080,()=>{console.log('application is running on port 8080')})