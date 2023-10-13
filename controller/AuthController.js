const AuthData = require("../model/auth");

/**
 * Retrieves data from a database using the AuthData model and sends it as a JSON response.
 * If an error occurs during the retrieval process, it sends a JSON response with an error message.
 * @param {object} req - The request object containing query parameters.
 * @param {object} res - The response object used to send the JSON response.
 */
async function GetAllAuth(req, res) {
  try {
    const { name } = req.query;
    const data = await AuthData.find({ name });
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
async function RegisterUser(req, res) {
  try {
    const data = req.body;
    if (!data) {
      return res.status(404).json({ message: "Data not provided" });
    }
    const response = await AuthData.create(data);
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}


/**
 * Handles an HTTP request and response.
 * @param {object} req - The HTTP request object.
 * @param {object} res - The HTTP response object.
 */
async function UpdateUser(req, res) {
  try {
    const { id } = req.query;
    const { body: data } = req;

    if (!data && !id) {
      return res.status(404).json({ message: "Data not provided" });
    }

    const response = await AuthData.findOneAndUpdate({ _id: id }, data, { new: true });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

/**
 * Deletes a user from the database.
 * @param {object} req - The request object containing information about the user to be deleted.
 * @param {object} res - The response object used to send the result of the deletion operation back to the client.
 */
async function DeleteUser(req, res) {
  try {
    const id = req.query.id;
    if (!id) {
      return res.status(404).json({ message: "Provide info to Delete Data" });
    }
    const response = await AuthData.findByIdAndDelete({ _id: id });
    res.status(201).json(response);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

module.exports = { GetAllAuth, RegisterUser, UpdateUser, DeleteUser };
