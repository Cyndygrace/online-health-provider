// we require the main graphql
const graphql = require('graphql');
const {GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID, GraphQLList, GraphQLNonNull, GraphQLInt } = graphql

const ServiceType = new GraphQLObjectType({
  name: "Service",
  field: ()=>({
    id: {type:GraphQLString},
    professionalTitle: {type: GraphQLString},
    description: {type: GraphQLString},
    address: {type: GraphQLString},
    serviceType: {type: GraphQLList },
    paymentType: {type: GraphQLList},
    pay: {type: GraphQLInt},
    workingPeriod: {type: GraphQLList, GraphQLObjectType},
  })
})

// 1. define types, 2. define relationship between types, 3. define the root query that connects the route to the data
