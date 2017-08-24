let enddialog_data = require('../data/zh-cn/answer')
module.exports = [
    (session)=>{
        session.endDialog(enddialog_data.answer_a3)
    }
]