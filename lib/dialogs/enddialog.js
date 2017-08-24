let enddialog_data = require('../data/zh-cn/enddialog-data')
module.exports = [
    (session)=>{
        session.endDialog(enddialog_data.end)
    }
]