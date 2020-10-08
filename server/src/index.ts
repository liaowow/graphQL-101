import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const app = express()
const port = 9000

const server = new ApolloServer({ schema })
server.applyMiddleware({app, path: '/api'})

app.listen(port)

console.log(`[app]: http://localhost:${port}`)



/* BEFORE APOLLO SERVER
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

*/