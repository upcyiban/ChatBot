let express = require('express')
let builder = require('botbuilder')
let YiBan = require('yiban-sdk')
let app = express()
let yb = new YiBan('484b6cb2a841acbd','b419227786ef48b206a690f97c2cddf5','','')

let connector = new builder.ChatConnector({
    appId: '3685e916-b8a6-4f3d-8a9e-e4e9231c25a7',
    appPassword: 'Dgxxxf9DJVk31qnN6sZM9RV'
})

app.get('/',(req, res, next)=>{
    res.send('This is Chat Bot!!!')
})

app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    console.log(session.message)
    session.userData.yb_info = yb.decryptoVerifyRequest(session.message.user.vq,(err, vq_info)=>{
        console.log(vq_info)
        session.userData.yb_info = vq_info
        session.send(yb.access_token)
    })
})
// const luis_url = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e8704174-630f-4a65-a018-7c634758321c?subscription-key=e6e5627b25f04e8fb05e3dffad6120a3&timezoneOffset=0&verbose=true&q='
// bot.recognizer(new builder.LuisRecognizer(luis_url));
bot.dialog('greeting',[
    (session)=>{
        console.log('yiban info :'+session.userData.yb_info)
        console.log('yiban info :'+JSON.stringify(session.userData.yb_info))
        console.log('vq info : '+yb.vq_info)
        console.log('vq info : '+JSON.stringify(yb.vq_info))
    
        console.log('at : '+yb.vq_info.visit_oauth.access_token)
        session.send(yb.vq_info.visit_oauth.access_token)
    }
]).triggerAction({
    matches: /^test$/
})
bot.dialog('info',(session)=>{
    yb.user().me((info)=>{
        console.log(info)
        session.endDialog(info.yb_usernick)
    })
}).triggerAction({
    matches: /^info$/i
})

let server = app.listen(process.env.PORT||5000, ()=> {
    console.log('Node app is running on port',server.address().port);
});