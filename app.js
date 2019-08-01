const express = require('express');
const app = express();
const schema = require('./schema/schema')

// we set up an express server that runs graphql api
const graphqlHTTP = require('express-graphql')

// this is done by using graphqlHTTP as a middleware on a single route which will serve as an end point to communicate with our graphql data.
app.use('/graphql', graphqlHTTP({
// graphqlHTTP must contain a schema of how the graph of our data looks(structure, datatype and relationship.)
schema:schema,
// to use the graphiql tool to test request to data on our graphql server
graphiql: true
}))





app.listen(4000, () => {
  console.log('now listening on port 4000...')
})
// setup graphql to work with our express application. installed graphql & express-graphql