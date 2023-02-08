import express from 'express'

//initiate express
const app = express()
app.use(express.json())

app.get('*', checkJwt, (req, res) => {
  res.json({ msg: 'not a valid route' })
  console.log('* hit')
})

//start server
const port = process.env.PORT || 4242
app.listen(port, () => {
  console.log(`Serving on port ${port}`)
})

//test push
