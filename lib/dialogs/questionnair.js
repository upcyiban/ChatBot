let questionnair_data = require('../data/zh-cn/questionnair-data')
let builder = require('botbuilder')
module.exports = [
    (session)=>{
        session.endDialog(questionnair_data.intro)
    }
    
    
]