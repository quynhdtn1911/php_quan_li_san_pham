const { multipleMongooseToObject } = require('../../util/mongoose');
const Course = require('../model/Course');

class TrashController{
    //[GET] trash/courses
    trashCourses(req, res, next){
        Course.findDeleted({})
            .then((courses) => {
                res.render('trash/courses', {
                    courses: multipleMongooseToObject(courses)
                })
            })
            .catch(err => next())
    }
}

module.exports = new TrashController;