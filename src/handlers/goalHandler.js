const { Goal } = require("../db/db.js");


const goalPostHandler = async(obj) => {
    const created = await Goal.create(obj);
    return created;
};

const goalGetAllHandler = async() => {
    const found = await Goal.findAll();
    return found;
};

const goalGetByIdHandler = async(id) => {
    const found = await Goal.findByPk(id);
    return found;
};

const goalPutHandler = async(id, obj) => {
    const found = await Goal.findByPk(id);
    if(found.length === 0){
        return null
    } else {
        const modified = await found.update(obj);
        return modified;
    }
};

const goalDeleteHandler = async(id) => {
    const found = await Goal.findByPk(id)
    if(found.length === 0){
        return null
    } else {
        found.destroy()
        return "Deletion complete"
    }
};



module.exports = {
    goalPostHandler,
    goalGetAllHandler,
    goalGetByIdHandler,
    goalPutHandler,
    goalDeleteHandler
}