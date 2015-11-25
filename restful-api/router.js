// keep local state for setting scope, this gets
// overwritten when the next scope is used (if ever)
let scopePrefix = '';
CR = ConnectRouter;


Router = {
  applyMiddleware(...wares) {
    wares.forEach(item => CR.addMiddleware(scopePrefix || '', item));
  },

  scope(prefix, callback) {
    scopePrefix = prefix;
    callback();
  },

  get(route, controller, action) {
    genericRoute('get', route, controller, action);
  },

  put(route, controller, action) {
    genericRoute('put', route, controller, action);
  },

  post(route, controller, action) {
    genericRoute('post', route, controller, action);
  },

  delete_(route, controller, action) {
    genericRoute('delete', route, controller, action);
  },

  // add all common rest routes to controller
  // resource {String} plural name, eg 'posts'
  resources(resource, controller, opts) {
    let actions = ['index', 'show', 'create', 'update', 'delete'];
    if (opts && opts.without) {
      actions = _.without(actions, ...opts.without);
    } else if (opts && opts.only) {
      actions = opts.only;
    }
    actions.forEach(action => {
      const [methodName, url] = getMethodAndUrl(action, resource);
      genericRoute(methodName, url, controller, action);
    });
  },
}


// private


function getMethodAndUrl(action, resource) {
  switch(action) {
    case 'index':  return ['get',    resource]
    case 'show':   return ['get',    resource + '/:id']
    case 'create': return ['post',   resource]
    case 'update': return ['put',    resource + '/:id']
    case 'delete': return ['delete', resource + '/:id']
  }
}

function genericRoute(type, route, controller, action) {
  if (route[0] !== "/") { // ensure resources gets a slash
    route = "/" + route;
  }
  CR.addRoute(type, scopePrefix + route, function routeCallback(req, res, next) {
    const connection = {req, res, next, userId: null};
    const params = _.extend({}, req.params, req.body)

    try {
      var finalConn = controller[action](connection, params);

      if (controller.debug) {
        console.log("\n[Debug response]", req.url)
        console.log("Status code", finalConn.res.statusCode)
        console.log("Headers", finalConn.res._header)
      }
      if (!finalConn) {
        throw new Error('You must return the connection in the controller action');
      }
      finalConn.res.end();
    } catch (e) {
      finalConn.res.end();
      console.log("\n\nError:\n\n", e);
      throw new Error();
    }
  });
}
