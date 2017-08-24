let usemoney_data = require('../data/zh-cn/usemoney-data')
let builder = require('botbuilder')
module.exports = [
    (session)=>{
        builder.Prompts.choice(session,usemoney_data.intro,usemoney_data.choices)
    },
    function (session,results) {
        if (results.response) {
            session.send('您选择了%s',results.response.entity)
            console.log(results.response)
            if(results.response.entity=='易打印')
            {
                session.send(usemoney_data.useprint)
                var msg = new builder.Message(session);
           msg.attachmentLayout(builder.AttachmentLayout.carousel)
           msg.attachments([
        new builder.HeroCard(session)
           .title("易打印使用方法")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi81NjgyNDExL2NhdGNoLzdhODI2NjRlM2IwNjJiMTUxNDczZGY5ZDJhOWQ1ZTAyLmpwZw==')])
          ,
         new builder.HeroCard(session)
           .title("易打印使用方法")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi81NjgyNDExL2NhdGNoLzViZWZlODIzN2RmYTUxNDhhMjE2Nzc1YmI3MjFhNTg3LmpwZw==')])
           ,
         new builder.HeroCard(session)
           .title("易打印使用方法")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi81NjgyNDExL2NhdGNoL2NhYjc4MWJmMThmYmIyMWY4MDI0MDMwZjBhMzEyMzUyLmpwZw==')])
           ,
        new builder.HeroCard(session)
           .title("易打印使用方法")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi81NjgyNDExL2NhdGNoLzBkYzlhYTFiOTBhMzAxZTM0NjYwMWUxOWRjNTBmYTRmLmpwZw==')])
           

           ])
        session.send(msg).endDialog();
            }
          if(results.response.entity=='网薪商城')
          {
              
              session.send(usemoney_data.shopintro)
              session.send(usemoney_data.entershop)
               var msg = new builder.Message(session);
           msg.attachmentLayout(builder.AttachmentLayout.carousel)
           msg.attachments([
         new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQVZCRDc=')])
          ,
        new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQk1SVVI=')])
          ,
         new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQk1SVVQ=')])
           ,
           new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQk1SVVg=')])
        ,
         new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQk1SVVY=')])
           ,
        
        new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQUVVVkQ=')])
       ,
        new builder.HeroCard(session)
           .title("网薪商城的商品")
           
           .images([builder.CardImage.create(session, 'http://img01.fs.yiban.cn/out/thumb/aHR0cDovL3lmczAxLmZzLnlpYmFuLmNuL3dlYi8xQUVVVjk=')])         

           ])
        session.send(msg).endDialog();
        
          }  
        if(results.response.entity=='转赠网薪')
        {
   var msg = new builder.Message(session);
    msg.attachmentLayout(builder.AttachmentLayout.carousel)
    msg.attachments([
        new builder.HeroCard(session)
            .buttons([
                builder.CardAction.imBack(session, "buy classic white t-shirt", "Buy")
            ])
         
            ])
            session.send(msg)
            console.log(results.response)
            session.endDialog()
       
        }
    }
    }
]