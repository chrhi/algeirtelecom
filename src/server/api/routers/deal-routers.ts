import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const dealRouter = createTRPCRouter({
    getDeals : publicProcedure
  
            .query( async ({ ctx }) => {
      
             const data = await ctx.prisma.deal.findMany()
             return data
     }),
    updateDeal: publicProcedure
    .input(z.object({ 
      id : z.string(),
      description : z.string(),
      title : z.string(), 
     }))
    .query( async ({input , ctx }) => {
      
     const data = await ctx.prisma.request.update({
      data: {
      description : input.description,
      title : input.title,
      },
      where:{
        id : input.id
      }
     })
     return data
    }),
    deleDeal: publicProcedure
    .input(z.object({ id: z.string() }))
    .query( async ({ input , ctx }) => {
      
     const data = await ctx.prisma.deal.delete({
        where : {
            id : input.id
        }
     })
     return data
    }),
    makeDeal: publicProcedure
    .input(z.object({ 
        ServiceId : z.string(),
      title : z.string(), 
      userId : z.string() ,
      employeeId : z.string()
     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.deal.create({
      data: {
       ServiceId : input.ServiceId ,
       title : input.title ,
       userId : input.userId ,
       employeeId : input.employeeId ,
      }
     })
     return data
    }),
  });