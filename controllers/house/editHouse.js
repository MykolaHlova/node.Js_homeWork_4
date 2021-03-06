const {houseService} = require('../../service');

module.exports = async (req, res) => {
    try {
        const patchHouseObject = req.body;
        const {house_id} = req.params;

        await houseService.editHouseById(patchHouseObject, house_id);

        res.redirect(`/houses/${house_id}`);
    } catch (e) {
        res.status(400).json(e.message)
    }
};