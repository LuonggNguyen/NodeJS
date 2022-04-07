const Course = require('../models/Course');
const {multipleMongooseToObject} = require('../../util/mongoose');

class SiteController {
    index(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('home',
                 { courses: multipleMongooseToObject(courses) });
            })
            .catch(next);
        // Course.find({}, function(err, courses){
        //     if(!err) {
        //         res.json(courses);
        //     }else{
        //         next(err);
        //         res.status(400).json({error: 'ERROR'});
        //     }
        // });

        // res.render('home');
    }
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
