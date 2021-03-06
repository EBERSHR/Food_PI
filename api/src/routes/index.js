const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

const recipe = require('./recipe');
const type = require('./type');


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.use('/recipes', recipe);
router.use('/types', type);

module.exports = router;
