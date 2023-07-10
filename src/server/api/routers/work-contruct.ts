import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const workContractRouter = createTRPCRouter({
 
    createWorkContract: publicProcedure
    .input(z.object({ 
      clientId : z.string(),
      employeeId : z.string(), 
      name : z.string(),
      bio : z.string(),
      type : z.string(),
      email : z.string(),
      following :z.string(), 
      image :z.string(), 
      password :z.string(), 

     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.workContract.create({
      data: {
        clientId : input.clientId , 
        employeeId : input.employeeId , 
        name  : input.name , 
        bio : input.bio , 
        type : input.type ,  
        email :input.email , 
        following : input.following ,  
        image : input.image , 
        password : input.password , 
      }
     })
     return data
    }),
   
  
  });