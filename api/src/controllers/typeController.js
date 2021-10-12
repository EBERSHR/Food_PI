const { Type } = require("../db");

async function getTypes(req, res, next) {

    const tiposDataBase = await Type.findAll({
        attributes: ["id", "name"]
    })
    res.send(tiposDataBase)

}

async function addTypes(req, res) {
    const { name } = req.body;

    await Type.create({
        name
    })
    res.send("Nuevo tipo creado....")
}

async function createTypes(req, res) {

    const allTypes = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian",
        "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal",
        "low FODMAP", "Whole30"];

    await Type.sync({ force: true }).then(() => {
        for (i = 0; i < allTypes.length; i++) {
            Type.create({
                name: allTypes[i]
            })
        }
        res.send("Nuevos tipos creados....")
    })
}

module.exports = {
    getTypes,
    createTypes,
    addTypes
}