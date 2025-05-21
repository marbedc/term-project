function checkUserSession(req, res, next) {
    res.locals.isLoggedIn = !!req.session.userId;
    next();
  }
  
  module.exports = checkUserSession;  