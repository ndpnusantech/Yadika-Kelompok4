// controllers/ProductController.js
import Product from "../models/ProductModel.js";
import categoryP from "../models/CategoryModel.js";

export const createCategory = async (req, res) => {
    try {
        await categoryP.create(req.body)
        res.status(201).json({msg: 'Category Created'})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Category not created" })
    }
}

export const getProductsByCategory = async (req, res) => {
  try {
    const category = req.params.product_category; // Ambil kategori dari permintaan
    const products = await Product.findAll({
      include: {
        model: categoryP,
        where: { product_category: category },
      },
    });
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
