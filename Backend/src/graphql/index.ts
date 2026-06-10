import { ApolloServer } from "@apollo/server";
import { prismaClient} from '../lib/db.js'
import { User } from "./user/index.js";
const createApolloGraphqlServer = async()=>{
      const gqlserver = new ApolloServer({
            typeDefs:`
                type Query{
                    ${User.queries}
                }
                type Mutation {
                    ${User.mutations}
                }
            `,
            resolvers:{
                Query:{
                    ...User.resolvers.queries
                },
                Mutation:{
                    ...User.resolvers.mutations
                }
            }
        })
        
        await gqlserver.start();
        return gqlserver;
}

export default createApolloGraphqlServer;