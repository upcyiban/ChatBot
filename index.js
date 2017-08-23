let express = require('express')
let builder = require('botbuilder')
let app = express()


app.get('/',(req, res, next)=>{
    res.send('This is Chat Bot!!!')
})

let connector = new builder.ChatConnector({
    appId: '3685e916-b8a6-4f3d-8a9e-e4e9231c25a7',
    appPassword: 'Dgxxxf9DJVk31qnN6sZM9RV'
})

app.get('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.send('Hello World')
})

app.listen(process.env.PORT||5000, function() {
    console.log('Node app is running on port', app.get('port'));
});