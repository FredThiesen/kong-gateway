const express = require("express")

const app = express()
const port = 3000

app.get("/test", (req, res) => {
	res.send("Parece ter dado certo!")
})

app.get("/test-two", (req, res) => {
	res.send("Parece ter dado certo, segunda rota.")
})

//if route not found, return 404
app.use((req, res) => {
	res.status(404).send(
		"404 - the js server is not able to find the requested route."
	)
})

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`)
})
