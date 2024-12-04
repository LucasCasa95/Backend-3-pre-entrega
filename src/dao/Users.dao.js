import userModel from "./models/User.js";


export default class Users {
    
    get = (params) =>{
        return userModel.find(params);
    }

    getBy = (params) =>{
        return userModel.findOne(params);
    }

    save = (doc) =>{
        return userModel.create(doc);
    }

    update = (id,doc) =>{
        return userModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return userModel.findByIdAndDelete(id);
    }

    async insertMany(usersData) {
        try {
            return await userModel.insertMany(usersData);  // Usamos el método insertMany de Mongoose
        } catch (error) {
            throw new Error('Error inserting users: ' + error.message);
        }
    }
}