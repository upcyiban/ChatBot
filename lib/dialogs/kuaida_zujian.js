let  kuaida_data = require('../data/zh-cn/kuaida-data')
//对应快搭的组件 在test_kuaida.js上用
let builder = require('botbuilder')

module.exports = [
    (session)=>{
        let msg = new builder.Message(session)
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .title("快搭组件介绍")
                .subtitle("我们暂时提供这些组件供大家使用哦")
                .text(kuaida_data.zujian)
                .images([builder.CardImage.create(session, kuaida_data.zujian1),
                    builder.CardImage.create(session,kuaida_data.zujian2),
                    builder.CardImage.create(session,kuaida_data.zujian3),
                    builder.CardImage.create(session,kuaida_data.zujian4),
                    builder.CardImage.create(session,kuaida_data.zujian5)
                ])  
                
         ] )
         session.send(msg);
         builder.Prompts.text(session,'对我们的解答还满意吗？')
    },
    (session,results)=>{
        if(results.response.match(/满意|嗯/)){
            session.endDialog('谢谢哟~希望下次还能帮到你~(^-^)~')
        }else{
            builder.Prompts.text(session,'难道是我讲的不够清楚吗？')
        }
    },
    (session,results)=>{
        session.dialogData.anwser = results.re
        console.log('results.response:'+results.response)
        if(results.response.match(/嗯|是|没/)){
            session.endDialog('好吧，好吧。建议去我们的官网去了解更多详情哦~ http://www.yiban.cn/')
        }else{
            session.endDialog('很高兴能帮助到你，再会')
        }
    }
]