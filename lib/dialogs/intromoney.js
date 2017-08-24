let money_data = require('../data/zh-cn/money-data')
let builder = require('botbuilder')
module.exports = [
    (session)=>{
        session.endDialog(money_data.intro)
    }
    
    
]