function route(handle, pathname) {
    console.log('about to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {           // 如果要请求的路径存在, 处理路径信息
        handle[pathname]();
    } else {
        console.log('no request handler found for' + pathname);     // 否则
    }
}
exports.route = route;

