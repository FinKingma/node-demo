cadeautjes = [
    {
        id: 1,
        naam: 'kip'
    },
    {
        id: 2,
        naam: 'appel'
    }
]

function ingepaktCadeautje() {
    return 'een ingepakte ' + cadeautjes[Math.ceil(Math.random() * cadeautjes.length - 1)].naam
}

module.exports = { ingepaktCadeautje }