import express from 'express';
import User from '../models/user.model';

const routerUser = express.Router();

routerUser
  .route('/users')

  .get(async (req, res) => {
    Product.find({ }, (err, users) => {
      return res.json({ users });
    });
  })

  
  .post(async (req, res) => {
    // req validation

    if (req.body.username && req.body.email && req.body.password) {

      const user_instance = new User({
        "username": req.body.username,
        "email": req.body.email,
        "password": req.body.password,
      });
      
      // Save the new model instance, passing a callback
      user_instance.save(function (err) {
        if (err) return handleError(err);
        
      });
    }
    return res.json({
      "status": "ok",
      "msg": "User has been succesfully stored",
    });
    
  });

  const handleError = function (err) {
  console.error(err);
  // handle your error
};

module.exports = routerUser;