const category = require('../models/category');


/*const categoryName = async (req,res) => {
    const cat = await category.getCategory();
    return res.render('./admin/category', {
        cat: cat,
        name: 'name'

    });
};*/
const categoryName = async (req,res) => {
    const categories = await category.getCategory();
    return res.render('admin/category',{categories:categories});
};



module.exports = {
    categoryName,
};



