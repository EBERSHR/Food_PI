const { Router } = require('express');
const { getTypes, createTypes, addTypes } = require('../controllers/typeController');
const router = Router();


router.get("/", getTypes);
router.get("/create", createTypes);
router.post("/add", addTypes);

module.exports = router;