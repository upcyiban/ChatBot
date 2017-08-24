let money_data = require('../data/zh-cn/money-data')
let builder = require('botbuilder')
module.exports = [
    function(session){
        builder.Prompts.text(session,money_data.have1)

    },function(session,results)
    {
        if(results.response=="更多")
        {
           
         var msg = new builder.Message(session);
           msg.attachmentLayout(builder.AttachmentLayout.carousel)
           msg.attachments([
           new builder.HeroCard(session)
           .title("网薪获得方法")
           
           .images([builder.CardImage.create(session, 'http://yb.upc.edu.cn/picture/2017shanghai/wangxin.jpg')])
           .text(money_data.end)
           ])
        session.send(msg).endDialog();
        }
        else
        {
            session.endDialog(money_data.end)
        }
    }
]