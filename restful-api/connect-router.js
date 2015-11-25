const Fiber = Npm.require("fibers");
const connect = Npm.require('connect');
const connectRoute = Npm.require('connect-route');
const app = connect();
let router;

WebApp.rawConnectHandlers.use(app);
WebApp.rawConnectHandlers.use(connectRoute(r => router = r ));

ConnectRouter = {
  addMiddleware(prefix, func) {
    // XXX have to wrap function for load order race condition
    app.use(prefix, func)
  },

  // adds an HTTP route to connect
  addRoute(method, path, handler) {
    if (path[0] !== "/") {
      path = "/" + path;
    }
    router[method](path, function (req, res, next) {
      Fiber(() => handler(req, res, next)).run();
    });
  }
};
