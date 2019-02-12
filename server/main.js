const port = process.env.PORT || 3000
const app = require('./index')
const db = require('./db/db')

db.sync()
  .then(() => {
    app.listen(port, () => console.log(`

        Listening on port ${port}

        http://localhost:${port}/

    `))
  })
