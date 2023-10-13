const CounterData = require("../model/Counter");

/**
 * Retrieves data from a database using the CounterData model and sends it as a JSON response.
 * If an error occurs during the retrieval process, it sends a JSON response with an error message.
 * @param {object} req - The request object containing query parameters.
 * @param {object} res - The response object used to send the JSON response.
 */
async function GetAllData(req, res) {
  try {
    const data = await CounterData.find(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
}

/**
 * Handles an HTTP request and response.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
async function AddData(req, res) {
  try {
  } catch (error) {
    // Send a JSON response with an error message
    res.status(404).json({
      message: error.message
    });
  }
}
