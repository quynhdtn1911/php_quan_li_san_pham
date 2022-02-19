const Course = require('../model/Course');
const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose');

class MeController{
    // [GET] me/stored/courses
    storedCourses(req, res, next){
        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCoursesCount]) => {
                res.render('me/stored/stored_courses', {
                    courses: multipleMongooseToObject(courses),
                    deletedCoursesCount
                })
            })
            .catch(err => next())
    }
}

module.exports = new MeController;