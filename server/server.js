const express = require("express");
const { ApolloServer } = require("apollo-server-express");

let aboutMessage = "Issue Tracker API v1.0";

const typeDefs = `
  type Query {
    about: String!
  }
  type Mutation {
    setABoutMessage(message: String!): String
  }
`;

const resolvers = {
  Query: {
    about: () => aboutMessage,
  },
  Mutation: {
    setABoutMessage,
  },
};

function setABoutMessage(_, { message }) {
  return (aboutMessage = message);
}

// const server = new ApolloServer({typeDefs, resolvers,});

// const app = express();

// app.use("/", express.static("public"));

async function startApolloServer(typeDefs, resolvers) {
  const server = new ApolloServer({ typeDefs, resolvers });
  const app = express();
  app.use("/", express.static("public"));
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  app.listen(3000, function () {
    console.log("App started on port 3000");
  });
}

startApolloServer(typeDefs, resolvers);

// server.applyMiddleware({ app, path: "/graphql" });

// app.listen(3000, function () {
//   console.log("App started on port 3000");
// });
