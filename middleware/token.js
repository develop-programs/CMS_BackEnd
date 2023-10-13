const jet = require("jsonwebtoken");

async function CheckToken(req, res, next) {
  const Key = req.headers.authorization;
  try {
    console.log(Key);
    next();
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

module.exports = CheckToken;
