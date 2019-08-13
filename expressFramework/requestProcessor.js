const  mongodb=require('mongodb')
const MongoClient = require('mongodb').MongoClient;
const dburl = 'mongodb://localhost/issuetracker'
var db;
var issuelistHandler = (req, res) => {
    console.log("get callled with req")

    MongoClient.connect(dburl).then((connection) => {
        db = connection.db("issuetracker");
       // console.log("db is -->",db)
        db.collection('issues').find().toArray().then((issues) => {
            console.log('Result of find:', issues);
            const metadata = {
                total_count: issues.length
            };
            res.json({
                _metadata: metadata,
                records: issues
            });
            connection.close();
        }).catch((error) => {
            console.log("error ===========",error)
            res.status(500).json({
                message: `Internal Server Error: ${error}`
            });
        })
    })
}

var issueFilterHandler = (req, res) => {
    const queryParams=req.query
    console.log("get callled with req",queryParams)

    MongoClient.connect(dburl).then((connection) => {
        db = connection.db("issuetracker");
       // console.log("db is -->",db)
        db.collection('issues').find(queryParams).toArray().then((issues) => {
            console.log('Result of find:', issues);
            const metadata = {
                total_count: issues.length
            };
            res.json({
                _metadata: metadata,
                records: issues
            });
            connection.close();
        }).catch((error) => {
            console.log("error ===========",error)
            res.status(500).json({
                message: `Internal Server Error: ${error}`
            });
        })
    })
}

var createIssuelistHandler = (req, res) => {
    const newIssue = req.body;
    console.log("post called with data ", newIssue)
    // newIssue.id = issues.length + 1;
    newIssue.created = new Date();

    if (!newIssue.status)
        newIssue.status = 'New';

    MongoClient.connect(dburl).then((connection) => {
         db = connection.db("issuetracker");
         db.collection('issues').insertOne(newIssue).then(result =>{
            db.collection('issues').find().toArray().then((issues) => {
            console.log('Result of find:', issues);
            const metadata = {
                total_count: issues.length
            };
            res.json({
                _metadata: metadata,
                records: issues
            });
            db.close();
        })
    }).catch((error) => {
        res.status(500).json({
            message: `Internal Server Error: ${error}`
        });
    })

    //res.json(issues);
});
}

var getissueHandler = (req, res) => {
    const queryParams=req.query.id
    console.log("get callled with req",queryParams)
   
    MongoClient.connect(dburl).then((connection) => {
        db = connection.db("issuetracker");
       // console.log("db is -->",db)
        db.collection('issues').find({_id: new mongodb.ObjectID(queryParams)}).toArray().then((issues) => {
            console.log('Result of find:', issues);
            const metadata = {
                total_count: issues.length
            };
            res.json({
                _metadata: metadata,
                records: issues
            });
            connection.close();
        }).catch((error) => {
            console.log("error ===========",error)
            res.status(500).json({
                message: `Internal Server Error: ${error}`
            });
        })
    })
}

exports.createIssuelistHandler = createIssuelistHandler
exports.issuelistHandler = issuelistHandler
exports.issueFilterHandler = issueFilterHandler
exports.getissueHandler = getissueHandler
