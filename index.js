import express from "express";
const app = express();
app.set('view engine', 'ejs')
const port = process.env.PORT || 3001

const pokemon = [
    {
        name: "Bisasam",
        type: "Pflanze",
        level_of_evolution: 16
    },
    {
        name: "Glumanda",
        type: "Feuer",
        level_of_evolution: 16
    }
]


app.get("/", (req, res) => {
    res.render('greeting')
})

app.get('/api/pokemon', (req, res) => {
    res.json(pokemon)
})

app.listen(port, () => console.log("Server listening at " + port))
