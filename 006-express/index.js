import express from 'express';
import bodyParser from 'body-parser';
import db, {insert} from "./db/index.js";
import {login} from "./api/user/index.js";
import {getAllBooks, getBookById, addNewBook, updateBook, deleteBook} from "./api/books/index.js";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/api/user/login', login)


app.get('/api/init', (req, res) => {
    db.run(insert, ["Harry Potter", "Some orphan story", "J. Rowling", "yes", "cover", "fileName" ]);
    db.run(insert, ["Lord of the Rings", "Audi founder's autobiography", "August Horch", "yes", "cover", "fileName" ]);
    db.run(insert, ["50 shades of gray ", "Coloring book for children", "F. Hunderedbucks III", "yes", "cover", "fileName" ]);
    res.send('DB is initialized');
})

app.get("/api/books/:id", getBookById);
app.get("/api/books", getAllBooks);

app.post("/api/books/", addNewBook);

app.patch("/api/books/:id", updateBook);

app.delete("/api/books/:id", deleteBook);


app.listen(3030, function() {
    console.log('listening on 3030')
})


