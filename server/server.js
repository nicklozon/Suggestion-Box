var restify = require('restify');

var server = restify.createServer({
    name: 'suggestion-box',
    version: '0.0.1'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());

server.get('/echo/:name', function (req, rest,next) {
    res.send(req.params);
    return next();
});


server.listen(3000, function() {
    console.log('%s listening at %s', server.name, server.url);
});
