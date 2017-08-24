let riddle_data = require('../data/zh-cn/riddle-data')
let builder = require('botbuilder')
let n =0
module.exports = [
    (session)=>{
        let i=Math.random()*10
        let x= parseInt(i)/2
        session.send(riddle_data.start)
        switch (x) {
            case 1:
            case 2:
                builder.Prompts.text(session,riddle_data.riddle1)
                n=1;
              break;
          case 3:
          case 4:
              builder.Prompts.text(session,riddle_data.riddle2)
              n=2
                  break;
            default:
             builder.Prompts.text(session,riddle_data.riddle3)
               n=3
                break;
        }
    },function (session,results) {
        if(n==1)
        {
                if(results.response==riddle_data.ans1)
                {
                    session.send(riddle_data.win)
                    session.endDialog(riddle_data.congratulate1)
                    
                }
               
           
            else if(results.response=='放弃')
            {
               session.send(riddle_data.fail)
            session.endDialog(riddle_data.answer1)
            }
             else
                {
                builder.Prompts.text(session,riddle_data.encourge1)
                }
            
        }
        if(n==2)
        {
           
                if(results.response==riddle_data.ans2)
                {
                    session.send(riddle_data.win)
                    session.endDialog(riddle_data.congratulate2)
                 
                }
                 else if(results.response=='放弃')
            {
               session.send(riddle_data.fail)
            session.endDialog(riddle_data.answer2)
            }
                else
                {
                builder.Prompts.text(session,riddle_data.encourge2)
                }

            
        }
        if(n==3)
        {
            
                if(results.response==riddle_data.ans3)
                {
                    session.send(riddle_data.win)
                    session.endDialog(riddle_data.congratulate3)
                 
                }
                 else if(results.response=='放弃')
            {
               session.send(riddle_data.fail)
            session.endDialog(riddle_data.answer3)
            }
                else
                {
                builder.Prompts.text(session,riddle_data.encourge1)
                }
           
          
        }
    },function(session,results)
    {
        if(results.response)
        {
            if(n==1){
              if(results.response==riddle_data.ans1)
              {
                  session.send(riddle_data.win)
                  session.endDialog(riddle_data.congratulate1)
              }
              else
              {
                  session.send(riddle_data.fail)
                  session.endDialog(riddle_data.answer1)
              }
            }
            if(n==2){
              if(results.response==riddle_data.ans2)
              {
                  session.send(riddle_data.win)
                  session.endDialog(riddle_data.congratulate2)
              }
              else
              {
                  session.send(riddle_data.fail)
                  session.endDialog(riddle_data.answer2)
              }
            }
            if(n==3){
              if(results.response==riddle_data.ans3)
              {
                  session.send(riddle_data.win)
                  session.endDialog(riddle_data.congratulate2)
              }
              else
              {
                  session.send(riddle_data.fail)
                  session.endDialog(riddle_data.answer3)
              }
            }
            
        }
        else
        {
            session.endDialog()
        }
    }
]