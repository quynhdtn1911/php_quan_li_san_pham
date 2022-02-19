const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');


const Course = new Schema({
    name: {type: String},
    description: {type: String},
    videoId: {type: String},
    level: {type: String},
    slug: {type: String, slug: 'name', unique: true}
}, {
    timestamps: true 
})

// mongoose plugin
mongoose.plugin(slug);
Course.plugin(mongoose_delete, {
    deletedAt: true,
    overrideMethods: 'all'
});

module.exports = mongoose.model('Course', Course);