let express = require('express')
let YiBan  =  require('yiban-sdk')
let app = express()


app.get('/',(req, res, next)=>{
    res.send('This is Chat Bot!!!')
})

app.listen(80,()=>{
    console.log('Yes! Application is running')
})