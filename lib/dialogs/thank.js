let thank_data = require('../data/zh-cn/answer')
module.exports = [
    (session)=>{
        session.endDialog(thank_data.answer_a1)
    }
]