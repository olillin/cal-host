import express from 'express'
import router from './api'

const {PORT} = process.env

const app = express()

app.get('/', (req, res) => {
    res.sendStatus(200).end()
})
app.use('/api', router)


const port = PORT ?? 8080
app.listen(port)
console.log(`Listening on port ${port}`)
