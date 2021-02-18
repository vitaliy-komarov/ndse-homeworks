import db, {remove} from "../../db/index.js";

export default (req, res) => {
    const {id} = req.params;
    db.run(remove,
        id,
        function (err) {
            if (err || !this.changes) {
                res.status(404).json({"error": err ? err.message : `Book with id:${id} is not found`})
                return;
            }
            res.status(200).json({ deletedID: id})
        });
}
