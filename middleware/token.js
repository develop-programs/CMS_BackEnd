const jwt = require("jsonwebtoken");
const AuthData = require("../model/auth");

/**
 * Verifies the authorization token sent in the request header.
 * Checks if the token is valid and matches the email stored in the database.
 * If the token is valid and the email matches, it calls the next middleware function.
 * If the token is invalid or the email does not match, it sends a response with status code 404 and a JSON object containing the message "Login to get Data".
 * @param {object} req - The request object containing the headers.
 * @param {object} res - The response object used to send the HTTP response.
 * @param {function} next - The next middleware function to be called.
 */
async function CheckToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    const split = token.split(" ");
    const decodedToken = jwt.verify(split[1], process.env.JWT_SECRETE_KEY);
    const data = await AuthData.findOne({ email: decodedToken.email });
    if (data) {
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

module.exports = CheckToken;
