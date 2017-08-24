let solife_data = require('../data/zh-cn/solife-data')
module.exports = [
    (session)=>{
        session.endDialog(solife_data.intro)
    }
]