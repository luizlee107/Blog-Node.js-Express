const categoryModel = require('../models/category');


const getCategory = async (req,res) => {
    const categories = await categoryModel.getCategory();
    return res.render('admin/category',{categories:categories});
};


const createCategory = async (req,res) => {
    const createdPost = await categoryModel.createCategories({

        name: req.body.name,
    });
    return res.redirect('/admin/category');
};


const deleteCategory = async(req,res) => {
    const { id } = req.params;
    await categoryModel.deleteCategory(id);
    return res.redirect('/admin/category');
};


module.exports = {
    getCategory,
    createCategory,
    deleteCategory,
};



