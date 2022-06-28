const database = require('../models')

class UserController {
    static async getAllUsers(req, res) {
        try {
            const allUsers = await database.user.findAll()
            return res.status(200).json(allUsers)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async getUser(req, res) {
        const { id } = req.params
        try {
            const user = await database.user.findOne({
                where:
                {
                    id: Number(id)
                }
            })
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUser(req, res) {
        const firstName = req.params
        const lastName = req.params
        const age = req.params
        const country = req.params
        const city = req.params
        const instagram = req.params
        const facebook = req.params
        const twitter = req.params
        const linkedin = req.params
        const active = req.params
        try {
            const newUserCreated = await database.user.create(firstName, lastName,
                age, country, city, instagram, facebook, twitter, linkedin, active)
            return res.status(200).json(newUserCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createUserBody(req, res) {
        const newUser = req.body
        try {
            const newUserCreated = await database.user.create(newUser)
            return res.status(200).json(newUserCreated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    static async updateUser(req, res) {
        const { id } = req.params
        const newData = req.body
        try {
            await database.user.update(newData, {
                where:
                {
                    id: Number(id)
                }
            })
            const userUpdated = await database.user.findOne({
                where:
                {
                    id: Number(id)
                }
            })
            return res.status(200).json(userUpdated)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params
        try {
            const user = await database.user.destroy({
                where:
                {
                    id: Number(id)
                }
            })
            return res.status(200).json({ message: `${id} has been destroyed!` })
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = UserController