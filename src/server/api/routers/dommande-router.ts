import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const dommandeRouter = createTRPCRouter({
  getDommands: publicProcedure
  
    .query( async ({ ctx }) => {
      
     const data = await ctx.prisma.request.findMany()
     return data
    }),
    updateDommands: publicProcedure
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
    detetDommands: publicProcedure
    .input(z.object({ id: z.string() }))
    .query( async ({ input , ctx }) => {
      
     const data = await ctx.prisma.request.delete({
        where : {
            id : input.id
        }
     })
     return data
    }),
    createDommands: publicProcedure
    .input(z.object({ 
        description : z.string(),
      title : z.string(), 
     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.request.create({
      data: {
        description : input.description,
        title : input.title,
      }
     })
     return data
    }),
  });