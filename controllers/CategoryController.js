const categoryModel = require('../models/category');


const getCategory = async (req,res) => {
    const categories = await categoryModel.getCategory();
    return res.render('admin/category',{categories:categories});
};

const getCategory2 = async (req,res) => {
    const categories = await categoryModel.getCategory();
    return res.render('./admin/newpost',{categories:categories});
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


const editCategory = async (req,res) => {
    const  id  = req.params.id;
    const category = await categoryModel.filterCategory(id);
    return res.render('./admin/editcategory',{category:category});
};

const updateCategory = async (req,res) => {
    const { id } = req.params.id;
    await categoryModel.updateCategory({
        id: req.body.id,
        name: req.body.name,
    });
    return res.redirect('/admin/category');
};


module.exports = {
    getCategory,
    getCategory2,
    createCategory,
    deleteCategory,
    updateCategory,
    editCategory,
};



