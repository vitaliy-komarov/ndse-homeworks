import db, {selectAll} from "../../db/index.js";

export default (req,res) => {
    db.all(selectAll, [], (err, rows) => {
        if(err){
            res.status(404).json({error: err.message});
            return;
        }
        res.status(200).json(rows);
    })
}
