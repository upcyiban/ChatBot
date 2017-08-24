let contact_data = require('../data/zh-cn/contact-data')
module.exports = [
    (session)=>{
        session.endDialog(contact_data.intro)
    }
]