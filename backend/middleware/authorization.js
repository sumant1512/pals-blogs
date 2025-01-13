const jwt = require("jsonwebtoken");
const AUTH_SECRET_KEY = "Sumant!123";

const authorize = async (req, res, next) => {
  // Reading auth token from headers
  const authToken = req.headers["auth-token"];

  // Checing if auth token exists
  if (!authToken) {
    res.status(401).send("Unauthorized user.");
  }

  try {
    // Verifying token for authorization
    const data = await jwt.verify(authToken, AUTH_SECRET_KEY);
    req.userData = data;
    next();
  } catch (error) {
    console.log(error);
    res.send(401).send("Unauthorized user.");
  }
};

module.exports = authorize;
