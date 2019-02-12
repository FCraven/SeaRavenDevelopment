const router = require('express').Router();

// route examples
// router.use('/users', require('./users')); // matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); // matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens')); // matches all requests to  /api/kittens/

//404 Error Handler
router.use(function(req,res,next){
  const err = new Error('Notfound!');
  err.status = 404;
  next(err);
})


module.exports = router;
