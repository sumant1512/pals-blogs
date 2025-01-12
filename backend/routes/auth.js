const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("./../models/User");

// Create user api
router.post(
  "/",
  [
    body("name").isLength({ min: 3 }),
    body("username").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const validationRes = validationResult(req);
    if (!validationRes.isEmpty()) {
      res.status(400).send({ errors: validationRes.array() });
    }
    User.create({
      name: req.body.username,
      username: req.body.username,
      password: req.body.password,
    })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  }
);

module.exports = router;
