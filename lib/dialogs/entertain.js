let entertain_data = require('../data/zh-cn/entertain-data')
let builder = require('botbuilder')
module.exports = [
    (session)=>{
        session.send(entertain_data.intro)
        var msg = new builder.Message(session)
    msg.attachmentLayout(builder.AttachmentLayout.carousel)
    msg.attachments([
        new builder.HeroCard(session)
            .buttons([
                builder.CardAction.imBack(session, entertain_data.btn1, entertain_data.btn1),
                builder.CardAction.imBack(session, entertain_data.btn2, entertain_data.btn2),
                builder.CardAction.imBack(session, entertain_data.more, entertain_data.end)
            ])
         
            ])
            session.send(msg)
            session.endDialog()
    }
    
    
]