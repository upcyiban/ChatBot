/**
 * Created by chenzifeng on 2017/8/23.
 */
let dinner_data = require('../data/zh-cn/dinner-data')
let builder = require('botbuilder')
module.exports = [
        (session)=>{
                session.send(dinner_data.hungry);
                session.endDialog(dinner_data.app)
                console.log(session)
                console.log(dinner_data.hungry)
                // session.beginDialog(dinner_data.hungry)
}
]