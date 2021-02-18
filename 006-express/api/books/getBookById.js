import db, {selectById} from "../../db/index.js";

export default (req, res) => {
    const {id} = req.params;
    db.get(selectById, id, (err, row) => {
        if (err || !row) {
            res.status(404).json({"error": err ? err.message : `Book with id:${id} is not found`});
            return;
        }
        res.status(200).json(row);
    });
};
