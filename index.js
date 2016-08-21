var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};        // 把每个路由要触发的事件做成一个集合
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

server.start(router.route, handle);     // 调用服务


