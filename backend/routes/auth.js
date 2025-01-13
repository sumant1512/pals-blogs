const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./../models/User");
const authorize = require("./../middleware/authorization");

const AUTH_SECRET_KEY = "Sumant!123";

// ROUTE 1: Create user api "/api/auth/createUser"
router.post(
  "/createUser",
  [
    body("name").isLength({ min: 3 }),
    body("username").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Validation checking
    const validationRes = await validationResult(req);

    if (!validationRes.isEmpty()) {
      res.status(400).send({ errors: validationRes.array() });
    }

    try {
      // Searching user in db
      const user = await User.findOne({ name: req.body.username });
      if (user) {
        return res.status(400).send("User already exists");
      }

      // generating salt for password
      const salt = await bcrypt.genSalt(10);

      // generation has for password
      const securePw = await bcrypt.hash(req.body.password, salt);

      // Creating user in mongodb
      User.create({
        name: req.body.username,
        username: req.body.username,
        password: securePw,
      })
        .then((user) =>
          res.json({
            message: "User Registered successfull. Please login to continue.",
          })
        ) // returning repsonse
        .catch((err) => res.json(err)); // returning db error
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    }
  }
);

// ROUTE 2: Authenticate a user "/api/auth/login"
router.post(
  "/login",
  [body("username").isEmail(), body("password").isLength({ min: 3 })],
  async (req, res) => {
    // input validation
    const validationRes = await validationResult(req);
    if (!validationRes.isEmpty()) {
      return res.status(400).send("Bad Request");
    }

    try {
      // Checking if user exists
      const user = await User.findOne({ username: req.body.username });
      if (!user) {
        return res.status(400).send("User not found");
      }

      // Checking password
      const passwordCompare = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!passwordCompare) {
        return res.status(400).send("Incorrect credetials");
      }

      const data = {
        id: user.id,
      };

      const authToken = await jwt.sign(data, AUTH_SECRET_KEY);

      res.status(200).send({ authToken });
    } catch (error) {
      console.log(error);
      res.status(500).send("Something went wrong");
    }
  }
);

// ROUTE 3: Get logged in user details "/api/auth/getUSer". Login required
router.get("/getUser", authorize, async (req, res) => {
  try {
    const userId = req.userData.id;
    const userDetails = await User.findById(userId).select("-password");
    res.status(200).send(userDetails);
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
