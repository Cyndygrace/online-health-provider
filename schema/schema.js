const _ = require('lodash');
// we require the main graphql
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID
} = graphql;

// var services = [
//   {
//     id: '1',
//     professionalTitle: 'Dentist',
//     description: 'lorem ipsum lorem ipsum lorem ipsum',
//     address: 'lorem ipsum lorem lorem ipsum',
//     serviceOption: ['Home consult', 'office consult', 'online consult'],
//     paymentType: ['hourly rate', 'daily rate'],
//     pay: 50,
//     workinPeriod: [{ from: '3am' }, { to: '5am' }]
//   },

//   {
//     id: '2',
//     professionalTitle: 'optician',
//     description: 'lorem ipsum lorem ipsum lorem ipsum',
//     address: 'lorem ipsum lorem lorem ipsum',
//     serviceOption: ['Home consult', 'office consult', 'online consult'],
//     paymentType: ['hourly rate', 'daily rate'],
//     pay: 70,
//     workinPeriod: [{ from: '3am' }, { to: '5am' }]
//   },

//   {
//     id: '3',
//     professionalTitle: 'pediatrician',
//     description: 'lorem ipsum lorem ipsum lorem ipsum',
//     address: 'lorem ipsum lorem lorem ipsum',
//     serviceOption: ['Home consult', 'office consult', 'online consult'],
//     paymentType: ['hourly rate', 'daily rate'],
//     pay: 80,
//     workinPeriod: [{ from: '3am' }, { to: '5am' }]
//   }
// ]

// const PeriodType = new GraphQLObjectType({
//   name: 'PeriodType',
//   fields: () => ({
//     from: {
//       type: GraphQLString
//     },
//     to: {
//       type: GraphQLString
//     }
//   })
// });

// define a type
const ServiceType = new GraphQLObjectType({
  name: 'Service',
  fields: () => ({
    id: { type: GraphQLID },
    professionalTitle: { type: GraphQLString },
    description: { type: GraphQLString },
    address: { type: GraphQLString },
    serviceOption: { type: new GraphQLList(GraphQLString) },
    paymentType: { type: new GraphQLList(GraphQLString) },
    pay: { type: GraphQLInt }
    // workingPeriod: {
    //   type: new GraphQLList(PeriodType),
    //   resolve: (parent, args) => parent.workinPeriod
    // }
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
      args: { id: { type: GraphQLID } },
      // uses the id to resolve this function
      resolve: (parent, args) => {
        // code to get services from sql or noSql db/ other sources
        // using lodash
        // console.log(services);

        const res = _.find(services, { id: args.id });
        // const res = services.find(service => service.id === args.id)
        console.log(res);
        return res;
      }
    },
    services: {
      type: new GraphQLList(ServiceType),
      resolve: (parent, args) => {
        return services;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  // the query we are allowing the user to use when they are making request from the front end
  query: RootQuery
});
