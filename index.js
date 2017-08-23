let express = require('express')
let YiBan  =  require('yiban-sdk')
let app = express()


app.get('/',(req, res, next)=>{
    res.send('This is Chat Bot!!!')
})

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
  });