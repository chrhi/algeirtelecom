import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getServices: publicProcedure
  
    .query( async ({ ctx }) => {
      
     const data = await ctx.prisma.service.findMany()
     return data
    }),
  
    deleteService: publicProcedure
    .input(z.object({ id: z.string() }))
    .query( async ({ input, ctx }) => {
      
     const data = await ctx.prisma.service.delete({
        where : {
            id : input.id
        }
     })
     return data
    }),
    createService: publicProcedure
    .input(z.object({ 
      title : z.string(),
      description : z.string(), 
      url : z.string(), 
    
     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.service.create({
      data: {
        title : input.title, 
        description : input.description ,
        url : input.url, 
      }
     })
     return data
    }),
   
  
  });