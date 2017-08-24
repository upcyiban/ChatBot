let express =require('express')
let builder = require('botbuilder')
let app = express()

let connector = new builder.ChatConnector({
    appId: '',
    appPassword: ''
})

app.post('/api/messages',connector.listen())

var LUIS_MODEL_URL = ("https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/4e0601bb-6599-4942-88ba-34b8c4179ee0?subscription-key=5bcd9ee5034e4f2b9238203ab8ce23da&verbose=true&timezoneOffset=0&")
var bot = new builder.UniversalBot(connector, (session)=>{
    bot.recognizer( new builder.LuisRecognizer(LUIS_MODEL_URL))
})
// let bot = new builder.UniversalBot(connector, (session)=>{

// })

// bot.recognizer(new builder.LuisRecognizer(LUIS_MODEL_URL));

//  session.send('this is test example');
// var bot = new builder.UniversalBot(connector,function(session){
//     "use strict";
// })

bot.dialog('greeting', [
	function(session)
	{	
		// session.send('inh')
		session.endDialog('你好<br>我是小易。')
	}
	
    // ... waterfall dialog ...
]).triggerAction({
	matches: '打招呼'
    
    
});

bot.dialog('activity', [
	function(session)
	{
       session.beginDialog("showShirts");
       
        session.endDialog('正在帮您换网薪')
	}
    // ... waterfall dialog ...
]).triggerAction({
    matches: '网薪'
});



// Add dialog to return list of shirts available
bot.dialog('showShirts', function (session) {
    var msg = new builder.Message(session);
    msg.attachmentLayout(builder.AttachmentLayout.carousel)
    msg.attachments([
        new builder.HeroCard(session)
            .title("Classic White T-Shirt")
            .subtitle("100% Soft and Luxurious Cotton")
            .text("Price is $25 and carried in sizes (S, M, L, and XL)")
            .images([builder.CardImage.create(session, 'http://imgsrc.baidu.com/imgad/pic/item/267f9e2f07082838b5168c32b299a9014c08f1f9.jpg')])
           
            // .buttons([
            //     builder.CardAction.imBack(session, "buy classic white t-shirt", "Buy")
            // ])
            ,
        new builder.HeroCard(session)
            .title("Classic Gray T-Shirt")
            .subtitle("100% Soft and Luxurious Cotton")
            .text("Price is $25 and carried in sizes (S, M, L, and XL)")
            .images([builder.CardImage.create(session, 'http://pic49.nipic.com/file/20140927/19617624_230415502002_2.jpg')])
            // .buttons([
            //     builder.CardAction.imBack(session, "buy classic gray t-shirt", "Buy")
            // ])
    ]);
    session.send(msg);
}).triggerAction({ matches: /^(show|list)/i });



app.listen(8082,()=>{console.log('application is running on port 11046')})