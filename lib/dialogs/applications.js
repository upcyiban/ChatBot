let application_data = require('../data/zh-cn/application-data')
module.exports = [
    (session)=>{
        session.endDialog(application_data.intro)
    }
]