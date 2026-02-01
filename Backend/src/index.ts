import express from 'express';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@as-integrations/express5';
const app = express();

app.use(express.json());    

// create apolloServer 
const gqlServer = new ApolloServer({
    typeDefs: ` 
    type Query{
        hello:String,
        say(name:String):String
    }
    ` ,    // Schema 
    resolvers:{
        Query:{
            hello:()=> 'hey there this is a graphql server',
            say:(_,{name}:{name:String})=>`hello ${name}`
        }
    }
})

// Start Gql Server

await gqlServer.start();

app.use('/graphql',expressMiddleware(gqlServer));


app.get('/',(req,res)=>{
    res.send("server is up and running ");
})


app.listen(3000,()=>{
    console.log("server is listening to port 3000");
})