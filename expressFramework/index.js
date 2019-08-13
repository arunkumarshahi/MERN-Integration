var server = require("./Server");
var routers = require("./router");
var requestHandlers = require("./requestProcessor");
var authController = require("./auth/AuthController");

var handle = {}
//getissueHandler
handle["get:/api/issue"] = requestHandlers.getissueHandler;
handle["get:/api/issues"] = requestHandlers.issuelistHandler;
handle["post:/api/issues"] = requestHandlers.createIssuelistHandler;
handle["/api/issues/filter"] = requestHandlers.issueFilterHandler;
handle["register"] = authController.registration;
handle["getToken"] = authController.getToken;
server.start(handle);