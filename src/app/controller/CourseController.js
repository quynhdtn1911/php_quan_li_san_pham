const Course = require('../model/Course');
const {mongooseToObject} = require('../../util/mongoose');

class CourseController{
    // get course/course_name
    showDetail(req, res, next){
        const slug = req.params.slug;
        Course.findOne({slug: slug})
            .then(course => {
                res.render('course/detail', {course: mongooseToObject(course)});
            })
            .catch(err => next())
    }

    // get course/create
    create(req, res){
        res.render('course/create');
    }

    // post course/add
    addCourse(req, res){
        Course.create(req.body)
            .then(() => res.redirect('/'))
            .catch(err => next())
    }

    // [GET] courses/edit/:id
    edit(req, res, next){
        const idCourse = req.params.id;
        Course.findOne({_id: idCourse})
            .then(course => {
                res.render('course/edit_course', {course: mongooseToObject(course)});
            })
            .catch(err => next())
    }

    //  [PUT] courses/:id
    update(req, res, next){
        const idCourse = req.params.id;
        Course.findOneAndUpdate({_id: idCourse}, req.body)
            .then(() => res.redirect('/me/stored/stored_courses'))
            .catch(err => next())
    }

    // [DELETE] courses/:id
    delete(req, res, next){
        const idCourse = req.params.id;
        Course.delete({_id: idCourse})
            .then(() => res.redirect('/me/stored/stored_courses'))
            .catch(err => next())
    }

    // [DELETE] course/:id/forced_course
    deleteForce(req, res, next){
        const idCourse = req.params.id;
        Course.deleteOne({_id: idCourse})
            .then(() => res.redirect('/trash/courses'))
            .catch(err => next())
    }

    // [PATCH] course/:id/restore
    restore(req, res, next){
        const idCourse = req.params.id;
        Course.restore({_id: idCourse})
            .then(() => res.redirect('/trash/courses'))
            .catch(err => next()) 
    }

    // [POST] course/handle-action
    handleAction(req, res, next){
        const coursesId = req.body.coursesId;
        const action = req.body.action;
        switch(action){
            case 'delete':
                Course.delete({_id: {$in: coursesId}})
                    .then(() => res.redirect('/me/stored/stored_courses'))
                    .catch(err => next())
                break;
            case 'restore':
                Course.restore({_id: {$in: coursesId}})
                    .then(() => res.redirect('/trash/courses'))
                    .catch(err => next())
                break;
            case 'delete-force':
                Course.deleteMany({_id: {$in: coursesId}})
                    .then(() => res.redirect('/trash/courses'))
                    .catch(err => next())
                break;

        }
    }
}

module.exports = new CourseController;