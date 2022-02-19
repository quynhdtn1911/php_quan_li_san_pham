module.exports = {
    multipleMongooseToObject : function(mongooseObjects){
        return mongooseObjects.map(mongooseObject => {
            return mongooseObject.toObject();
        });
    },
    mongooseToObject: function(mongooseObject){
        return mongooseObject.toObject();
    }
}