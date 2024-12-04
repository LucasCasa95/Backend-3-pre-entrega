import petModel from "./models/Pet.js";

export default class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        return petModel.findOne(params);
    }

    save = (doc) =>{
        return petModel.create(doc);
    }

    update = (id,doc) =>{
        return petModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }

    async insertMany(petsData) {
        try {
            return await petModel.insertMany(petsData); // Aquí se usa petModel
        } catch (error) {
            throw new Error('Error inserting pets: ' + error.message);
        }
    }
}