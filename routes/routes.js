const { kyrProfile } = require('../models/kyrProfile');

module.exports = (app) => {
    
    app.get('/api/search', (req, res, next) => {

        if (req.query.phone) {
            kyrProfile.find({ phone: req.query.phone }, { _id: 0, __v: 0 }).then(result => {
                res.send(result);
            })
            .catch(next);
        }
        else {
            kyrProfile.find({ $text: { $search: req.query.name } }).limit(20).then(result => {
                res.send(result);
            })
            .catch(next);
        }
    });

    app.post('/api/submit', (req, res, next) => {

        kyrProfile.create(req.body).then(profile => {
            res.send(profile);
        })
        .catch(next);
    });
}