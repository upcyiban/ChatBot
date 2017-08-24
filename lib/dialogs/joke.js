let joke_data = require('../data/zh-cn/joke-data')
module.exports = [
    (session)=>{
      
let i = Math.random()*10;
let ii = parseInt(i)/2;
switch (ii) {
    case 0:
         session.endDialog(joke_data.joke1)
        break;
    case 1:
         session.endDialog(joke_data.joke2)
        break;
     case 2:
         session.endDialog(joke_data.joke3)
        break; 
    case 3:
         session.endDialog(joke_data.joke4)
        break;      
    default:
    session.endDialog(joke_data.joke5)
        break;
}
    }
]