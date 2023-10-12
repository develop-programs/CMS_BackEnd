const ProductData = require("../model/Products");

/**
 * Retrieves all products from the database using the provided query parameters.
 *
 * @param {object} req - The request object containing query parameters.
 * @param {object} res - The response object used to send the response to the client.
 * @returns {Promise} - A promise that resolves to the retrieved products as a JSON response.
 */
async function GetAllProducts(req, res) {
  try {
    const data = await ProductData.find(req.query);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json(error);
  }
}

/**
 * Handles a POST request to add product data to a database.
 * @param {object} req - The request object containing the data to be added.
 * @param {object} res - The response object used to send the result of the operation.
 * @returns {Promise<void>} - A promise that resolves when the operation is complete.
 */
async function AddProducts(req, res) {
  try {
    const data = req.body;
    await ProductData.create(data);
    res.status(201).json("Data Uploaded");
  } catch (error) {
    res.status(404).json(error);
  }
}

async function EditProducts(req, res) {
  const { id } = req.params;

  try {
    const existingProduct = await ProductData.findOne({ id });
    if (!existingProduct) {
      return res.status(404).json({ error: "Product not found" });
    }

    const updatedProduct = await ProductData.findOneAndUpdate(
      { id },
      req.body,
      {
        new: true
      }
    );

    res.status(200).json({ product: updatedProduct });
  } catch (error) {
    res.status(500).json(error);
  }
}

/**
 * Deletes a product from the database.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 */
async function DeleteProducts(req, res) {
  try {
    const id = req.params.id;
    const product = await ProductData.findById(id);
    if (product) {
      await ProductData.findByIdAndDelete(id);
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    console.error(error);
    if (error instanceof NotFoundError) {
      res.status(404).json(error);
    } else if (error instanceof UnauthorizedError) {
      res.status(401).json(error);
    } else if (error instanceof ForbiddenError) {
      res.status(403).json(error);
    } else {
      res.status(500).json(error);
    }
  }
}

module.exports = { GetAllProducts, AddProducts, EditProducts, DeleteProducts };
