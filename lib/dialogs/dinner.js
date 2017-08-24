/**
 * Created by chenzifeng on 2017/8/23.
 */
let dinner_data = require('../data/zh-cn/dinner-data')
let builder = require('botbuilder')
module.exports = [
        (session)=>{
                builder.Prompts.text(session, dinner_data.hungry);
                console.log(session)
                console.log(dinner_data.hungry)
                // session.beginDialog(dinner_data.hungry)
},
        (session,results)=>{
                // let a = /^吃饭吧/
                // if(a.match)
                let anwser = results.response +
                session.endDialog(dinner_data.gotoeat,results.response);      
}
]