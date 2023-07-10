import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { prisma } from "~/server/db";

export const profileRouter = createTRPCRouter({
    getProfile : publicProcedure
               .input(z.object({ 
                       id : z.string(),
                  }))
  
            .query( async ({input  }) => {



                //get the user 
                //get the services 
                //get the employees

                const client = await prisma.user.findUnique({
                    where :{
                        id : input.id
                    }
                })

                const servicesIdsOfClinet = await prisma.deal.findMany({
                    where :{
                        userId : input.id
                    }
                 })

                

                 const employeesWorkingForClient = await prisma.workContract.findMany({
                    where :{
                        clientId : input.id,    
                    }
                 })

            
                 return {
                    user : client  ,
                    services : servicesIdsOfClinet , 
                    employees : employeesWorkingForClient
                 }
                 
     }),
  
  });