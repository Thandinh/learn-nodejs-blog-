class SiteController {
    // [GET] /
    index(req, res) {
        res.render('Home');
    }

    // [GET] /search
    search(req, res) {
        res.render('Search');
    }
}

module.exports = new SiteController();
