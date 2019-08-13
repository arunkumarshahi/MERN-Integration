var router = (handle, pathname, response, request) => {
    console.log("About to route a request for " + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response, request);
    } else {
        response.writeHead(404, {
            "Content-Type": "text/plain"
        });
        response.write("404 Not found");
        response.end();
    }
}

exports.router = router