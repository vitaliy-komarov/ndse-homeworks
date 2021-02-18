import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('./db/books.db', (err) => {
    if (err) {
        console.error("DB can't be open: " + err.message);
    } else {
        db.run('CREATE TABLE books( \
            id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,\
            title NVARCHAR(20),\
            description NVARCHAR(200),\
            authors NVARCHAR(200),\
            favorite NVARCHAR(20),\
            fileCover NVARCHAR(200),\
            fileName NVARCHAR(200)\
        )', (err) => {
            if (err) {
                console.log("Table already exists.");
            }
        });
    }
});

export default db;
export {insert} from './insert.js';
export {selectById} from './selectById.js';
export {selectAll} from './selectAll.js';
export {update} from './update.js';
export {remove} from './remove.js';
