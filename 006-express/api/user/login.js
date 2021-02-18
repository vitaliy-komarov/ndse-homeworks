const auth = { id: 1, mail: "test@mail.ru" }

export default (req, res) =>  {
    res.status(201).json(auth)
}
