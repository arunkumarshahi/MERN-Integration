var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
const  mongodb=require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost/issuetracker'
var db;

var registration = (req, res) => {
    console.log("get callled with req")
    const user = req.body;
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    const userObj={
        name:user.name,
        password:hashedPassword,
        email:user.email
    }
    MongoClient.connect(dburl).then((connection) => {
        db = connection.db("issuetracker");
        db.collection('users').insertOne(userObj).then(result =>{
           
           console.log('Result of find:', result);
           var token = jwt.sign({ id: result._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

           res.json({ auth: true, token: token });
        //    res.status(200).send({ auth: true, token: token });
           db.close();
      
   }).catch((error) => {
       res.status(500).json({
           message: `Internal Server Error: ${error}`
   
        });
    })

    //res.json(issues);
});
}
   
var getToken = (req, res) => {
    
    const name = {name:req.body.name}
    console.log("get callled with req",name)
    MongoClient.connect(dburl).then((connection) => {
        db = connection.db("issuetracker");
        db.collection('users').find(name).toArray().then(result =>{
           
           console.log('Result of find:', result[0]._id);
           var token = jwt.sign({ id: result[0]._id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

           res.json({  token: token });
        //    res.status(200).send({ auth: true, token: token });
           db.close();
      
   }).catch((error) => {
       res.status(500).json({
           message: `Internal Server Error: ${error}`
   
        });
    })

    //res.json(issues);
});
}



module.exports = {
    registration: registration,
    getToken:getToken
  };