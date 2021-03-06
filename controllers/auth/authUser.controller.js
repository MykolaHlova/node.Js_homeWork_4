const {tokinazer} = require('../../helpers');

module.exports = async (req, res) => {
    try {
        const user = req.user;
        const tokens = tokinazer(user)

        res.json(tokens)
    } catch (e) {
        res.json(e.message)
    }
};
