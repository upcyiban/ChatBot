let lifeapp_data = require('../data/zh-cn/lifeapp-data')
let builder = require('botbuilder')
module.exports = [
    (session)=>{
        session.send(lifeapp_data.intro)
        var msg = new builder.Message(session)
    msg.attachmentLayout(builder.AttachmentLayout.carousel)
    msg.attachments([
        new builder.HeroCard(session)
            .buttons([
                builder.CardAction.imBack(session, lifeapp_data.btn1, lifeapp_data.btn1),
                builder.CardAction.imBack(session, lifeapp_data.btn2, lifeapp_data.btn2),
                builder.CardAction.imBack(session, lifeapp_data.btn3, lifeapp_data.btn3),
                builder.CardAction.imBack(session, lifeapp_data.btn4, lifeapp_data.btn4),
                builder.CardAction.imBack(session, lifeapp_data.btn5, lifeapp_data.btn5)
            ])
         
            ])
            session.send(msg)
            session.endDialog(lifeapp_data.end)
    }
]