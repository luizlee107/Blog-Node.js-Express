const validate = (req,res,next) => {
    const { body } = req;
    if (body.id === undefined) {
        res.render('error', { message: 'The field "id" is required' });
    };
    if (body.title === undefined) {
        res.render('error', { message: 'The field "title" is required' });
    };

    if (body.category === undefined) {
        res.render('error', { message: 'The field "category" is required' });
    };

    if (body.content === undefined) {
        res.render('error', { message: 'The field "content" is required' });
    };

    if (body.author === undefined) {
        res.render('error', { message: 'The field "author" is required' });
    };

    if (body.title === '' || body.category ==='' || body.author ==='' || body.content ==='') {
        res.render('error', { message: 'The fields cammot be empty' });
    }
    next();
};


/*const validateData = (req, res, next) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and Content are required fields' });
    }
    next();
};
  
  module.exports = validateData;*/

module.exports = {
    validate,
};