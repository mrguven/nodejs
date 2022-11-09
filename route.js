const { text } = require('body-parser');
const { response } = require('express');


app
.route("/home")
.get((request,response,nexthandler)) => {
    response.type (""text/html")
    response.write("<DOCTTYPE html")
    nexthandler()
})
