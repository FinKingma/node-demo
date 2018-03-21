var cadeautjes = require('../models/cadeautjes')
function getPresent(req, res) {
    res.json({ message: 'asjeblieft! ' + cadeautjes.ingepaktCadeautje() });
}

module.exports = { getPresent };
