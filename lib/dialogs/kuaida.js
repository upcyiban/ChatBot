let kuaida_data = require('../data/zh-cn/kuaida-data')
let builder = require('botbuilder')
let help = require('../data/zh-cn/help')
let anwser = require('../data/zh-cn/answer')
module.exports = [
    (session)=>{
        let msg = new builder.Message(session)
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .title(kuaida_data.what_1)
                .subtitle(kuaida_data.what_2)
                .text(kuaida_data.build_1)
                .images([builder.CardImage.create(session, kuaida_data.build_2),
                    builder.CardImage.create(session,kuaida_data.build_3),
                    builder.CardImage.create(session,kuaida_data.build_4)
                ])  
                
         ] )
         session.send(msg);
        builder.Prompts.text(session,)
        
    },
    (session,results)=>{
        // session.send()
        session.dialogData.anwser = results.re
        console.log('results.response:'+results.response)
        if(results.response.match(/没/)){
            session.endDialog(anwser.answer_a1)
        }
    }
    
    // (session,args,next)=>{
    //     let intent = args.intent;
    //     let guanli = builder.EntityRecognizer.findEntity(intent.entities, '快搭::管理');
    //     let zuijian = builder.EntityRecognizer.findEntity(intent.entities,'快搭::组件');
    //     let mokuai = builder.EntityRecognizer.findEntity(intent.entities,'快搭::，模块');
        
    //     console.log('我看看这是什么鬼：'+session.dialog.note)
    // }
   
]