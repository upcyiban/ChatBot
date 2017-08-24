let kuaida_data = require('../data/zh-cn/kuaida-data')
let builder = require('botbuilder')
module.exports = [
    (session)=>{
        let msg = new builder.Message(session)
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            new builder.HeroCard(session)
                .title("快搭介绍")
                .subtitle("如何创建一个快搭")
                .text(kuaida_data.build_1)
                .images([builder.CardImage.create(session, kuaida_data.build_2),
                    builder.CardImage.create(session,kuaida_data.build_3),
                    builder.CardImage.create(session,kuaida_data.build_4)
                ])  
                
         ] )
         session.send(msg);
        builder.Prompts.text(session,'对快搭还有什么问题吗？亲')
        
    },
    (session,results)=>{
        // session.send()
        session.dialogData.anwser = results.re
        console.log('results.response:'+results.response)
        if(results.response.match(/没/)){
            session.endDialog('很高兴能帮助到你')
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