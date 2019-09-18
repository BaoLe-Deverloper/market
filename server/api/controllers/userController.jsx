module.exports = {
    get: (req, res, next) => {
        const id = req.params.id;
        User.findById(id).exec().then(doc => {
            if (doc) {
                res.status(200).json(doc)
            }
            else {
                res.status(404).json({
                    message: "No valid entru found for id " + id + " ! "
                })
            }

        }).catch(err => {
            res.status(500).json({
                err
            })
        })
    },
    post: (req, res, next) => {
        res.status(200).json("post");
    }

}