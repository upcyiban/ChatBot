let  kuaida_data = require('../data/zh-cn/kuaida-data')
let anwser = require('../data/zh-cn/answer')
let help = require("../data/zh-cn/help")
//对应快搭的组件 在test_kuaida.js上用
let builder = require('botbuilder')

module.exports = [
    (session)=>{
        let msg = new builder.Message(session)
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .title()
                .subtitle(kuaida_data.zujian_t1)
                .text(kuaida_data.zujian_t2)
                .images([builder.CardImage.create(session, kuaida_data.zujian1),
                    builder.CardImage.create(session,kuaida_data.zujian2),
                    builder.CardImage.create(session,kuaida_data.zujian3),
                    builder.CardImage.create(session,kuaida_data.zujian4),
                    builder.CardImage.create(session,kuaida_data.zujian5)
                ])  
                
         ] )
         session.send(msg);
         builder.Prompts.text(session,anwser.answer_q1)
    },
    (session,results)=>{
        if(results.response.match(/满意|嗯/)){
            session.endDialog(anwser.answer_a2)
        }else{
            builder.Prompts.text(session,anwser.answer_q3)
        }
    },
    (session,results)=>{
        session.dialogData.anwser = results.re
        console.log('results.response:'+results.response)
        if(results.response.match(/嗯|是|没/)){
            session.endDialog(help.kuaida)
        }else{
            session.endDialog(anwser.answer_a1)
        }
    }
]