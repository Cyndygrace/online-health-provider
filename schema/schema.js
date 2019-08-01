// we require the main graphql
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt
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
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    // which query
    service: {
      // type of query
      type: ServiceType,
      args: {id: {type:GraphQLString}},
      resolve:(parent, args) {
        // resolved code
      }
    }
  }
});
