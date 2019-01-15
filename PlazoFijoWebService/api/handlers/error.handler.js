exports.handleError = function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      error: {
        message: err.message,
        stack: err.stack
      },
    });
}