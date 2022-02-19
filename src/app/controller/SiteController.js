const Course = require("../model/Course");
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');

class SiteController{
    index(req, res, next){
        Course.find({})
            .then(courses => {
                // res.json(multipleMongooseToObject(courses));
                res.render('home', {courses: multipleMongooseToObject(courses)});
            })
            .catch(err => next(err))
    }

    search(req, res){
        res.send('SEARCH')
    }
}

module.exports = new SiteController