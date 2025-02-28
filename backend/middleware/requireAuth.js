const jtw = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = async (req, res, next) => {
    // verify authentication
    const { authorization } = req.headers

    if (!authorization) return res.status(401).json({ error: 'Authorization token required' })

    token = authorization.split(' ')[1]

    try {
        const { _id } = jtw.verify(token, process.env.SECRET)

        req.user = await User.findOne({ _id }).select('_id')
        next()
    } catch (e) {
        Console.log(e)
        res.status(401).json({ error: 'Request not authorized' })
    }
}

module.exports = requireAuth