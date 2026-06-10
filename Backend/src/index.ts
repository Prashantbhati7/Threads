import express from "express"
import { expressMiddleware } from '@as-integrations/express5';
import dotenv from "dotenv"

import createApolloGraphqlServer from "./graphql/index.js";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;


const init = async()=>{
  
    const gqlserver = await createApolloGraphqlServer();

    app.get('/',(req,res)=>{
        return res.json({"message":"server is up and running "})
    })


    app.use('/graphql',expressMiddleware(gqlserver))

    app.listen(PORT,()=>{
      console.log(`server is running on port ${PORT}`)
    })


}

init();

export default app;