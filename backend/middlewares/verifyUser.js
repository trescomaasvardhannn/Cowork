const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyToken = (req, res, next) => {
  const token = req.headers['auth-token'];
  const username = req.headers['x-username'];
  const image = req.headers['x-image'];

  if (!token || !username || !image) {
    return res.status(403).json({ message: "Authentication required." });
  }

  // Verify the token
  jwt.verify(token, config.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
    req.user = user;
    next();
  });
};

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {
    const isUsernameValid = String(req.user.username) == req.headers['x-username'];
    const isImageValid = String(req.user.image) == req.headers['x-image'];

    if (isUsernameValid && isImageValid) {
      next();
    } else {
      return res.status(403).json({ message: "Access denied. Authorization failed." });
    }
  });
};

module.exports = {
  verifyTokenAndAuthorization,
  verifyToken,
};
