const bodyParser = require('body-parser')
const user = require('./userRoute')


module.exports = app => {
    app.use(bodyParser.json())
    app.get('/', (req, res) => res.send('Welcome to simple crud user!'))
    app.use(user)
}