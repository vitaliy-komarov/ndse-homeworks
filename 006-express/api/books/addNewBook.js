import db, {insert} from "../../db/index.js";

export default (req, res) => {
    const {
        title,
        description,
        authors,
        favorite,
        fileCover,
        fileName
    } = req.body;
    db.run(insert,[
            title,
            description,
            authors,
            favorite,
            fileCover,
            fileName
        ],
        function (err) {
            if (err) {
                res.status(400).json({ "error": err.message })
                return;
            }
            res.status(201).json({
                "book_id": this.lastID
            })
        });
};
