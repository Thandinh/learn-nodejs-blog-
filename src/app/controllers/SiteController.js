const Course = require('../models/Course')

class SiteController {
    // [GET] /
    async index(req, res) {
        try {
            const courses = await Course.find({})
            res.json(courses)
        } catch(error) {
            res.status(400).json({ error: `ERROR!!! ${error}` });
        }
        
        // res.render('Home');
    }

    // [GET] /search
    search(req, res) {
        res.render('Search');
    }
}

module.exports = new SiteController();
