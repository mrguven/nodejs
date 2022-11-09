const  express  = require('express');
const app = express()


app.get('/one',(request,response,nexthandler) => {
    response.status(200).send('Hello') })

app.listen(3010, () => console.log('web server running on port 3000'))
