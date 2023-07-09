import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const workContractRouter = createTRPCRouter({
 
    createService: publicProcedure
    .input(z.object({ 
      clientId : z.string(),
      employeeId : z.string(), 
      title : z.string(),
     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.workContract.create({
      data: {
        clientId : input.clientId , 
        employeeId : input.employeeId , 
        title : input.title
      }
     })
     return data
    }),
   
  
  });