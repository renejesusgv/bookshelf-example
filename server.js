var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

app.use(bodyParser.json());
app.use('/public', express.static(__dirname + '/public'));

/* Router */
require('./router')(app);


// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  input SalesmanInput {
    xid: Int
  }

  type Salesman {
    id: ID!
    xid: Int
  }

  type Query {
    getSalesman(xid: Int): Salesman
  }

  type Mutation {
    createSalesman(input: SalesmanInput): Salesman
  }
`);

// If Message had any complex fields, we'd put them on this object.
class Salesman {
  constructor(id, {xid}) {
    this.id = id;
    this.xid = xid;
  }
}

var fakeDatabase = {};

var root = {
  getSalesman: function ({id}) {
    if (!fakeDatabase[id]) {
      throw new Error('no Salesman exists with id ' + id);
    }
    return new Salesman(id, fakeDatabase[id]);
  },
  createSalesman: function ({input}) {
    // Create a random id for our "database".
    var id = require('crypto').randomBytes(10).toString('hex');

    fakeDatabase[id] = input;
    return new Salesman(id, input);
  },
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.listen(3000, function () {
	console.log('Go to localhost:3000');
});