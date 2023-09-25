const Router = require('express')
const router = new Router()
const UserController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')//проверка пользователя на авторизованность

router.post('/registration', UserController.registration)
router.get('/:id',UserController.getOne)
router.get('/', UserController.getAll)
router.delete('/:id', UserController.delPerson)
router.put("/", UserController.update)

module.exports = router