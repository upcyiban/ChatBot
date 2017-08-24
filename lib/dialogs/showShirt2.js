let builder = require('botbuilder')

//引入builder

module.exports = (session)=>{
    var msg = new builder.Message(session);
        msg.attachmentLayout(builder.AttachmentLayout.carousel)
        msg.attachments([
            // new builder.HeroCard(session)
            //     .title("微社区的主界面")
            //     .subtitle("包含发布者的信息和其他的热门话题")
            //     .text("大家可以在这里找到自己感兴趣的东西")
            //     .images([builder.CardImage.create(session, 'http://yb.upc.edu.cn/picture/2017shanghai/weishequ1.png')])
           
            //  ,
            new builder.HeroCard(session)
                .title("评论以及回复可添加图片哦")
                .subtitle("注：只可添加一张图片哦~")
                .text("支持评论发布至动态")
                .images([builder.CardImage.create(session, 'http://yb.upc.edu.cn/picture/2017shanghai/weishequ2.png')])
     
            // ,
            // new builder.HeroCard(session)
            // .title("支持匿名评论")
            // .subtitle("支持匿名评论，也可以添加图片哦~")
            // .text("匿名评论后昵称会系统生成字符串，没有人知道你是谁啦！")
            // .images([builder.CardImage.create(session, 'http://yb.upc.edu.cn/picture/2017shanghai/weishequ5.png')])


//希望把他拆为3份来进行改变。

        ]);



        session.send(msg).endDialog();

}