let express = require('express')
let builder = require('botbuilder')
let app = express()



let connector = new builder.ChatConnector({
    appId: '3685e916-b8a6-4f3d-8a9e-e4e9231c25a7',
    appPassword: 'Dgxxxf9DJVk31qnN6sZM9RV'
})

app.get('/',(req, res, next)=>{
    res.send('This is Chat Bot!!!')
})

app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    // session.send('Hello World')
})

bot.dialog('greeting',(session)=>{
    session.endDialog('Hello')
}).triggerAction({
    matches: 'My.Test'
})

const luis_url = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/1d9245db-703c-4326-a5e6-2811a63b0189?subscription-key=4a094653359e49af8f7c11ccd8e81902&timezoneOffset=0&verbose=true&q='
bot.recognizer(new builder.LuisRecognizer(luis_url));

let server = app.listen(process.env.PORT||5000, ()=> {
    console.log('Node app is running on port',server.address().port);
});