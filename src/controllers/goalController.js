const { goalPostHandler, goalGetAllHandler, goalGetByIdHandler, goalPutHandler, goalDeleteHandler } = require("../handlers/goalHandler.js");

const goalPostController = async(req, res) => {
    try {
        const { title, description, deadline } = req.body;
        const created = await goalPostHandler({ title, description, deadline });
        return res.status(200).json(created);
        
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const goalGetAllController = async(req, res) => {
    try {
        const found = await goalGetAllHandler();
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const goalGetByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const found = await goalGetByIdHandler(id);
        return res.status(200).json(found);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
};

const goalPutController = async(req, res) => {
    let found = null;
    try {
        const { id } = req.params;
        const { title, description, deadline } = req.body;
        found = await goalPutHandler(id, { title, description, deadline });
            return res.status(200).json(found);
    } catch (error) {
        if(found === null){
            return res.status(404).json("Goal not found");
        } else {
            return res.status(500).json({ error: error.message });
        }
    }
};

const goalDeleteController = async(req, res) => {
    let response = null;
    try {
        const { id } = req.params;
        response = await goalDeleteHandler(id)
        return res.status(200).json(response);
    } catch (error) {
        if(response === null){
            return res.status(404).json("Goal not found to be deleted");
        } else {
            return res.status(500).json({ error: error.message });
        }
    }
};

module.exports = {
    goalPostController,
    goalGetAllController,
    goalGetByIdController,
    goalPutController,
    goalDeleteController
}