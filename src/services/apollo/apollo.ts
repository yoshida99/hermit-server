import { ApolloServer } from "apollo-server-express";
import prisma from "../prisma";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: (req: Express.Request, res: Express.Response) => {
        req.prisma = prisma;
        return {
            req,
            res
        }
    }
});

export default server;