let express =require('express')
let YiBan = require('yiban-sdk')
let builder = require('botbuilder')
let kuaida = require('../../../lib/dialogs/kuaida')
let kuaida_zujian = require('../../../lib/dialogs/kuaida_zujian')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})
let luisAppUrl = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e8704174-630f-4a65-a018-7c634758321c?subscription-key=e6e5627b25f04e8fb05e3dffad6120a3&timezoneOffset=0&verbose=true&q='

app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    session.beginDialog('kuaida')
})
bot.recognizer(new builder.LuisRecognizer(luisAppUrl))
// bot.recognizer({
//     recognize: function (context, done) {
//     var intent = { score: 0.0 };
  
//           if (context.message.text) {
//               switch (context.message.text.toLowerCase()) {
//                   case 'help':
//                       intent = { score: 1.0, intent: 'Help' };
//                       break;
//                   case 'goodbye':
//                       intent = { score: 1.0, intent: 'Goodbye' };
//                       break;
//               }
//           }
//           done(null, intent);
//       }
//     })
bot.dialog('kuaida',kuaida).triggerAction({
    matches:'快搭'
})
bot.dialog('zujian',kuaida_zujian).triggerAction({
    matches:'快搭组件'    
})
app.listen(8080,()=>{console.log('application is running on port 8080')})