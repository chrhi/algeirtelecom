import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const serviceRouter = createTRPCRouter({
  getServices: publicProcedure
  
    .query( async ({ ctx }) => {
      
     const data = await ctx.prisma.service.findMany()
     return data
    }),
  getOneServices: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.service.findUnique({
      where :{
        id : input.id
      }
     })
     console.log(data)
     return data
    }),
    deleteService: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation( async ({ input, ctx }) => {
      
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
      imageUrl : z.string(),
      cost : z.number()
     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.service.create({
      data: {
        title : input.title, 
        description : input.description ,
        url : input.url, 
        image : input.imageUrl , 
        cost  : input.cost,

        
      }
     })
     return data
    }),

   
  
  });