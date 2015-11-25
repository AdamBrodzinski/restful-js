Middleware = {
  acceptJSON(req, res, next) {
    next();
  },

  acceptMultiPart(req, res, next) {
    next();
  },

  logger(req, res, next) {
    next();
  },
}
