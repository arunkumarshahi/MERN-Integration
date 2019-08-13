const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(express.static('static'));
app.use(bodyParser.json());
app.use(cors())
start = ( handle) => {

    //router(handle, pathName, response, request);
   
    app.get('/api/issue',handle['get:/api/issue'] );
    app.post('/api/issues',handle['post:/api/issues'] );
    app.get('/api/issues',handle['get:/api/issues'] );
    app.get('/api/issues/filter',handle['/api/issues/filter'] );
    app.post('/register',handle['register'] );
    app.post('/getToken',handle['getToken'] );
    
    app.listen(4000, () => {
        console.log("server has started")
    })
}

exports.start = start;