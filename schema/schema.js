// we require the main graphql
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLSchema
} = graphql;

// define a type
const ServiceType = new GraphQLObjectType({
  name: 'Service',
  fields: () => ({
    id: { type: GraphQLString },
    professionalTitle: { type: GraphQLString },
    description: { type: GraphQLString },
    address: { type: GraphQLString },
    serviceType: { type: GraphQLList },
    paymentType: { type: GraphQLList },
    pay: { type: GraphQLInt },
    workingPeriod: { type: GraphQLList, GraphQLObjectType }
  })
});

// 1. define types, 2. define relationship between types, 3. define the root query that connects the route to the data
// defines how we jump into the graph
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // which query
    service: {
      // type of query
      type: ServiceType,
      // looks for this id
      args: {id: {type:GraphQLString}},
      // uses the id to resolve this function
      resolve:(parent, args) => {
        // resolved code
      }
    }
  }
});

module.exports = new GraphQLSchema({
  // the query we are allowing the user to use when they are making request from the front end
  query: RootQuery
})
