const newsRouter = require('./news');
const siteRouter = require('./site');
const courseRouter = require('./course');
const meRouter = require('./me');
const trashRouter = require('./trash');

const route = function(app){
    app.use('/trash', trashRouter);
    app.use('/me', meRouter);
    app.use('/course', courseRouter);
    app.use('/news', newsRouter);
    app.use('/', siteRouter);
}

module.exports = route;