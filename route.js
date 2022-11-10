const  express  = require('express');
const app1 = express()


app1.get('/one',(request,response,nexthandler) => {
    response.status(200).send('Hello') })

app1.listen(3010, () => console.log('web server running on port 3010'))
const os = require('os');
console.log(os);