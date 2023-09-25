const ApiError = require('../error/ApiError')

const {User} = require('../models/models')


class UserController{
    async registration(req,res,next){
        const {surname, name, lastName, birthday, passportSeries, passportId, whoIssuedThePassport, dateOfIssue, placeOfBirth, registration , homeTel, mobileTel, email, placeOfWork, post, maritalStatus, citizenship, disability, retiredPeople, income} = req.body
        if(!surname && !name && !lastName && !birthday && !passportSeries && !passportId && !whoIssuedThePassport && !dateOfIssue && !placeOfBirth && !registration && !maritalStatus && !citizenship && !disability && !retiredPeople && !income){
            return next(ApiError.badRequest('Нет некоторых данных! Проверте ввод.'));
        }
        const candidate = await User.findOne({where: {surname,name,lastName}})
        if(candidate){
            return next(ApiError.badRequest('Пользователь с таким именем уже существует'))
        }
        const user = await User.create({surname, name, lastName, birthday, passportSeries, passportId, whoIssuedThePassport, dateOfIssue, placeOfBirth, registration , homeTel, mobileTel, email, placeOfWork, post, maritalStatus, citizenship, disability, retiredPeople, income})
        return res.json({user})
    }
    async delPerson(req,res,next){
        const {id} = req.params
        if(!id){
            return next(ApiError.internal('Ошибка. Необходимо указать id пользователя'))
        }
        const user = await User.findByPk(id)
        if(!user){
            return next(ApiError.internal('Ошибка. Пользователь с таким id не найден'))
        }
        await user.destroy()
        res.json({message: 'Пользователь успешно удалён'})
    }


    async getAll(req, res){
        const users = await User.findAll({
            order: [
                ['surname', 'ASC'], // Сортирует по фамилии в алфавитном порядке
                ['name', 'ASC'] // Сортирует по имени в алфавитном порядке
            ]
        });
        res.json(users)
    }

    async getOne(req, res, next){
        const {id} = req.params
        if(!id){
            return next(ApiError.internal('Ошибка. Необходимо указать id пользователя'))
        }
        const data = await User.findOne({where: {id}})
        console.log(data)
        res.json(data)
    }

    async update(req,res,next){
        const {id,surname, name, lastName, birthday, passportSeries, passportId, whoIssuedThePassport, dateOfIssue, placeOfBirth, registration , homeTel, mobileTel, email, placeOfWork, post, maritalStatus, citizenship, disability, retiredPeople, income} = req.body
        if(!id){
            return next(ApiError.internal('Ошибка. Необходимо указать id пользователя'))
        }
        const user = await User.findByPk(id)
        await user.update({surname, name, lastName, birthday, passportSeries, passportId, whoIssuedThePassport, dateOfIssue, placeOfBirth, registration , homeTel, mobileTel, email, placeOfWork, post, maritalStatus, citizenship, disability, retiredPeople, income})
        return res.json({user})
    }
}

module.exports = new UserController()