const express = require('express');
const app = express()
const port = 3008

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
   res.send('OK')
})

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})