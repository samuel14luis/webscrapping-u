var {Router} = require('express')
const router = Router();

router.get('/', (req, res) => {
    res.send('Api Funcionando..')
});

module.exports = router;