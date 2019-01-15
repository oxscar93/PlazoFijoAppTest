exports.saveOneToMany = function(
                                primaryModel,
                                secondModel,
                                entity, 
                                entityListName,
                                foreignKeyName) {
    return primaryModel
           .create(entity)
           .then(result => {

            var promises = []
    
            if (entity[entityListName]){

                entity[entityListName].forEach(element =>{
                   element[foreignKeyName] = result.id;
                   promises.push(secondModel.create(element));
                });
    
                return Promise.all(promises).then(values => { 
                  return result.id;
                });
            }
    
            return result.id;
        });
};

exports.findAllOneToMany = function(
                    model,
                    secondModel,
                    alias) {

    return model.findAll({include: [
                              { model: secondModel, 
                                as: alias},
                          ]});
};

exports.findAll = function(model, query) {
    return model.findAll(query);
};

exports.findOne = function(model, query) {
    return model.findOne(query);
};

exports.createEntity= function(
    model,
    entity) {

       return model.create(entity)
        .then(result => {

         return result;
        });
};

exports.updateEntity= function(
    model,
    query,
    entity) {

    return model.update(
                    entity,
                    query
                )
};

exports.updateOneToMany= function(
    primaryModelId,
    model,
    secondModel,
    query,
    entity,
    asocEntityName) {
        return model.update(entity, {where: {id: primaryModelId}})
           .then(result => {
             if (entity[asocEntityName]){
                return model.findById(primaryModelId).then(result =>{
                   return secondModel.destroy(query).then(res => {
                   
                    var promises= [];

                    entity[asocEntityName].forEach(element =>{
                        promises.push(secondModel.create(element));
                    });
         
                     return Promise.all(promises).then(values => { 
                        return result["set" + asocEntityName.charAt(0).toUpperCase() 
                                     + asocEntityName.slice(1)](values);                                                                           
                     });
               });;                 
               });                
             }
             else{
                 return result;
             }
           });
};

exports.delEntity= function(
    model,
    query) {

    return model.destroy(query);
};


