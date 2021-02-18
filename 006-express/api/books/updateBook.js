import db, {update} from "../../db/index.js";

export default (req, res) => {
    const {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName
    } = req.body;
    const {id} = req.params;
    db.run(update, [
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName,
            id
        ],
        function (err) {
            if (err || !this.changes) {
                res.status(404).json({"error": err ? err.message : `Book with id:${id} is not found`})
                return;
            }
            res.status(201).json({ updatedID: this.changes });
        });
};
