let money_data = require('../data/zh-cn/money-data')
module.exports = [
    (session)=>{
        session.endDialog(money_data.intro)
    }
]