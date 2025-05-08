const { StatusCodes } = require("http-status-codes");
const Product = require("../model/user.model");
const baseResponse = require("../dto/baseResponse.dto");
const utils = require("../utils/helper");

exports.createProduct = async (req, res) => {
  try {
    const { name, price, category, description, stock } = req.body;
    const product = new Product({
      name,
      price,
      category,
      description,
      stock,
    });
    await product.save();
    res.status(StatusCodes.CREATED).json({
      ...baseResponse,
      data: product,
      code: StatusCodes.CREATED,
      timestamp: new Date(),
      message: "Ürün kaydı oluşturuldu",
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      succes: false,
      error: true,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
      timestamp: new Date(),
      message: error.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res
      .json({
        ...baseResponse,
        data: products,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByPriceGreater = async (req, res) => {
  try {
    const { value } = req.params;
    const products = await Product.find({ price: { $gt: value } });

    res
      .json({
        ...baseResponse,
        data: products,
        code: StatusCodes.OK,
        message: "Ürünler listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.getProductsByFilter = async (req, res) => {
  try {
    const products = await Product.find({ stock: { $exists: false } });

    res
      .json({
        ...baseResponse,
        data: products,
        code: StatusCodes.OK,
        message: "Başarıyla listelendi",
      })
      .status(StatusCodes.OK);
  } catch (error) {
    res
      .json({
        ...baseResponse,
        success: false,
        error: true,
        message: error.message,
        code: StatusCodes.INTERNAL_SERVER_ERROR,
      })
      .status(StatusCodes.INTERNAL_SERVER_ERROR);
  }
};

exports.sorgu1 = async (req, res) => {
  try {
    const { val1 } = req.params;
    const json = await Product.find({ price: { $gte: val1 } });
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: "Fiyatı verilen değerden büyük veya eşit olanları döndürdü",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu2 = async (req, res) => {
  try {
    const { val1 } = req.params;
    const json = await Product.find({ price: { $lte: val1 } });
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: "Fiyatı verilen değerden küçük veya eşit olanları döndürdü",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu3 = async (req, res) => {
  try {
    const { val1, val2 } = req.params;
    const json = await Product.find({ price: { $gte: val1, $lte: val2 } });
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success:
        "Fiyatı verilen değerden büyük veya küçük eşit olanları döndürdü",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu4 = async (req, res) => {
  try {
    const { val1, val2, name } = req.params;
    const json = await Product.find(
      { name: { $eq: name } },
      { price: { $gt: val1, $lte: val2 } }
    );
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: "Başarılı",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu5 = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;
    const json = await Product.find({
      $and: [{ name: { $eq: name } }, { price: { $gt: val1, $lte: val2 } }],
    });
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: "Başarılı",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu6 = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;
    const json = await Product.find({
      $or: [{ name: { $eq: name } }, { price: { $gt: val1, $lte: val2 } }],
    });
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: "Başarılı",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};

exports.sorgu7 = async (req, res) => {
  try {
    const { name, val1, val2 } = req.params;
    const json = await Product.find(
      { description: { $exists: false } },
      { stock: { $gte: val1, $lte: val2 } },
      { price: { $gt: val3 } }
    );
    res.status(StatusCodes.OK).json({
      ...baseResponse,
      data: json,
      success: "Başarılı",
      code: StatusCodes.OK,
    });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      ...baseResponse,
      error: true,
      success: false,
      message: error.message,
      code: StatusCodes.INTERNAL_SERVER_ERROR,
    });
  }
};
