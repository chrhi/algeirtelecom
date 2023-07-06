import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const reportsRouter = createTRPCRouter({
  getReports: publicProcedure
  
    .query( async ({ ctx }) => {
      
     const data = await ctx.prisma.report.findMany()
     console.log(data)
     return data
    }),
    updateReport: publicProcedure
    .input(z.object({ 
      id : z.string(),
      ClientInformation : z.string(),
      Details : z.string(), 
      Date : z.string(), 
      title : z.string(),
      Request : z.string(), 
     
     }))
    .query( async ({input , ctx }) => {
      
     const data = await ctx.prisma.report.update({
      data: {
       ClientInformation :  input.ClientInformation, 
       Details :  input.Details, 
       Date :  input.Date , 
       title :  input.title, 
       Request :  input.Request
      },
      where:{
        id : input.id
      }
     })
     return data
    }),
    deteReport: publicProcedure
    .input(z.object({ id: z.string() }))
    .query( async ({ input , ctx }) => {
      
     const data = await ctx.prisma.report.delete({
        where : {
            id : input.id
        }
     })
     return data
    }),
    createReport: publicProcedure
    .input(z.object({ 
        ClientInformation : z.string(),
        Details : z.string(), 
        Date : z.string(), 
        title : z.string(),
        Request : z.string(), 
     }))
    .mutation( async ({input , ctx }) => {
      
     const data = await ctx.prisma.report.create({
      data: {
        ClientInformation :  input.ClientInformation, 
        Details :  input.Details, 
        Date :  input.Date , 
        title :  input.title, 
        Request :  input.Request
      }
     })
     return data
    }),
  });