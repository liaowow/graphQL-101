import express from 'express'
import bodyParser from 'body-parser'
import { listings } from './listings'

const app = express()
const port = 9000

app.use(bodyParser.json())

// get listings
app.get('/listings', (_req, res) => {
  return res.send(listings)
})

// delete listing, return the deleted listing
app.post('/delete-listing', (req, res) => {
  const id: string = req.body.id

  for (let i = 0; i < listings.length; i++) {
    if (listings[i].id === id) {
      return res.send(listings.splice(i, 1))
    } 
  }
  res.send('failed to delete listing')
})

app.listen(port)

console.log(`[app]: http://localhost:${port}`)
