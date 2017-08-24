let express = require('express')
let builder = require('botbuilder')
let fs      = require('fs')
let https   = require('https')
let request = require('request')
let dateformat = require('dateformat')
let YiBan = require('yiban-sdk')
let app = express()
let yb = new YiBan('484b6cb2a841acbd','b419227786ef48b206a690f97c2cddf5','','')

let connector = new builder.ChatConnector({
    appId: '3685e916-b8a6-4f3d-8a9e-e4e9231c25a7',
    appPassword: 'Dgxxxf9DJVk31qnN6sZM9RV'
})

let httpsOptions = {
    key: fs.readFileSync('/etc/letsencrypt/live/bot.lylllcc.cc/privkey.pem'),
    cert: fs.readFileSync('/etc/letsencrypt/live/bot.lylllcc.cc/cert.pem'),
    ca: fs.readFileSync('/etc/letsencrypt/live/bot.lylllcc.cc/chain.pem')
}

app.get('/',(req, res, next)=>{
    res.send('This is Chat Bot!!!')
})

app.post('/api/messages',connector.listen())

let bot = new builder.UniversalBot(connector, (session)=>{
    // console.log(session.message)
    session.userData.vq_info = yb.decryptoVerifyRequest(session.message.user.vq,(err, vq_info)=>{
        // console.log(vq_info)
        // session.userData.vq_info = vq_info
        // session.send(yb.access_token)
        session.send('对不起，我实在不知道你在说啥')
    })
})
// const luis_url = 'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/e8704174-630f-4a65-a018-7c634758321c?subscription-key=e6e5627b25f04e8fb05e3dffad6120a3&timezoneOffset=0&verbose=true&q='
// bot.recognizer(new builder.LuisRecognizer(luis_url));
bot.dialog('greeting',[
    (session)=>{
        // console.log('yiban info :'+session.userData.yb_info)
        // console.log('yiban info :'+JSON.stringify(session.userData.yb_info))
        // console.log('vq info : '+yb.vq_info)
        // console.log('vq info : '+JSON.stringify(yb.vq_info))
    
        // console.log('at : '+yb.vq_info.visit_oauth.access_token)
        session.endDialog(yb.vq_info.visit_oauth.access_token)
    }
]).triggerAction({
    matches: /^test$/
})
bot.dialog('info',(session)=>{
    console.log(yb.user())
    yb.user().me((err,info)=>{
        console.log(info)
        session.endDialog(info.yb_usernick)
    })
}).triggerAction({
    matches: /^info$/i
})

let isClassRoom = false

bot.dialog('publicGroup',(session)=>{
    
    
    
        if(yb.access_token){
            yb.group().publicGroup((err,public_group_info)=>{
                session.userData.public_group = public_group_info.public_group
                console.log('public_group')
                console.log(session.userData.public_group)
                session.userData.public_group.map((g,i)=>{
                    yb.group().groupInfo(g.group_id,(err, info)=>{
                        console.log(info)
                        // console.log(info.group_notice[0].topic_content)
                        info.group_notice = [...new Set(info.group_notice)]
                        let text = info.group_name
                        for(let i =0; i< info.group_notice.length; i++){
                             text+=`<br/>${info.group_notice[i].topic_title}`
                        }
                        if(i === session.userData.public_group.length-1){
                            session.endDialog(text)
                        }else{
                            session.send(text)
                        }
                    })
                })
             })
        }else{
            yb.decryptoVerifyRequest(session.message.user.vq,(err, vq_info)=>{
                console.log(vq_info)
                session.userData.vq_info = vq_info
                if(yb.access_token){
                    yb.group().publicGroup((err,public_group_info)=>{
                       session.userData.public_group = public_group_info.public_group
                       console.log('public_group')
                       console.log(session.userData.public_group)
                       session.userData.public_group.map((g,i)=>{
                           yb.group().groupInfo(g.group_id,(err, info)=>{
                               console.log(info)
                            //    console.log(info.group_notice[0].topic_content)
                               info.group_notice = [...new Set(info.group_notice)]
                               let text = info.group_name
                               for(let i =0; i< info.group_notice.length; i++){
                                    text+=`<br/>${info.group_notice[i].topic_title}`
                               }
                                if(i === session.userData.public_group.length-1){
                                    session.endDialog(text)
                                }else{
                                    session.send(text)
                                }
                           })
                       })
                    })
               }
            })
        }
    
    // session.endDialog('publicGroup')
}).triggerAction({
    matches: /^d$/i
})


bot.dialog('querySches',(session)=>{
    // session.userData.classroom = undefined
        let now = dateformat(new Date(),'yyyy-mm-dd')
        yb.decryptoVerifyRequest(session.message.user.vq,(err, vq_info)=>{
            session.userData.vq_info = vq_info
            session.send('正在查询请稍后...')
            yb.user().verifyMe((err,verify_info)=>{
                if (err){console.log(err)}
                console.log(verify_info)
                session.userData.verify_info = verify_info
                let query_sche_url = `http://yb.upc.edu.cn:8083/simpleQuery/sche?studentid=${verify_info.yb_studentid}&strdate=${now}`
                console.log(query_sche_url)
                request.get(query_sche_url,(err, res, body)=>{
                    let sches = JSON.parse(body)
                    console.log(sches)
                    let text = '今日课表:'
                    sches.map((s)=>{
                        text += `<br/>${s.coursesName}  ${s.coursesLocation}  ${s.coursesTime}节`
                    })
                    session.endDialog(text)
                })
            })
        })
}).triggerAction({
    matches: /^a$/i
})
bot.dialog('queryScore',(session)=>{
        let query_score_url = 'http://yb.upc.edu.cn:8083/simpleQuery/score?studentid='
        yb.decryptoVerifyRequest(session.message.user.vq,(err, vq_info)=>{
            session.userData.vq_info = vq_info
            session.send('正在查询请稍后...')
            yb.user().verifyMe((err,verify_info)=>{
                if (err){console.log(err)}
                console.log(verify_info)
                query_score_url = query_score_url + verify_info.yb_studentid
                session.userData.verify_info = verify_info
                request.get(query_score_url,(err, res, body)=>{
                    let scores = JSON.parse(body)
                    let text = '成绩:'
                    scores.map((s)=>{
                        text = `${text}<br/>${s.KCMC} : ${s.zcj}`
                    })
                    session.endDialog(text)
                })
            })
        })
}).triggerAction({
    matches: /^b$/i
})
bot.dialog('queryClassRoom',[
    (session)=>{
        builder.Prompts.text(session,'多少周?')
    },(session, results)=>{
        session.userData.classroom = {}
        session.userData.classroom.week = results.response
        builder.Prompts.text(session,'星期几？')
    },(session, results)=>{
        session.userData.classroom.day = results.response
        builder.Prompts.text(session,'第几节课?')
    },(session,results)=>{
        session.userData.classroom.n = results.response
        let query_classroom_url = `http://yb.upc.edu.cn:8083/simpleQuery/classroom?week=${session.userData.classroom.week}&day=${session.userData.classroom.day}&n=${session.userData.classroom.n}`
                request.get(query_classroom_url,(err, res, body)=>{
                    let cs = JSON.parse(body)
                    let text = '可用自习室:'
                    text = `${text}<br/>南教:${cs.njLists}`
                    text = `${text}<br/>南堂:${cs.ntLists}`
                    text = `${text}<br/>东环:${cs.dhLists}`
                    text = `${text}<br/>西环:${cs.xhLists}`
                    text = `${text}<br/>东廊:${cs.dlLists}`
                    text = `${text}<br/>西廊:${cs.xlLists}`
                    session.userData.classroom = undefined
                    session.endDialog(text)
                })
    }
]).triggerAction({
    matches: /^c$/i
})
bot.on('conversationUpdate', function (message) {
    console.log('conversationUpdate:')
    console.log(message)
    if (message.membersAdded && message.membersAdded.length > 0 && message.membersAdded[0].name==='ChatBot') {
        let msg = new builder.Message().address(message.address).text('欢迎使用Bo，快捷查询请回复: <br/> a : 查询今日课表<br/>b : 查询成绩<br/>c : 查询自习教室<br/>d : 查看群公告<br/>或者说出你的问题~~')
        // msg.attachmentLayout(builder.AttachmentLayout.list)
        // msg.addAttachment([
        //     new builder.HeroCard()
        //         .title('Welcome !!!!')
        //         .subtitle('This is YiBan chat bo')
        //         .text('You can select on from the four below to quickly start')
        // ])
        bot.send(msg)
    }
});

https.createServer(httpsOptions, app).listen(8080,()=>{
    console.log('server is running on port 8080')
})

// let server = app.listen(process.env.PORT||5000, ()=> {
//     console.log('Node app is running on port',server.address().port);
// });

