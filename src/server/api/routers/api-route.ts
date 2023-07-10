import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const apiRequestRouter = createTRPCRouter({
    getApiRequests : publicProcedure
  
            .query( async ({ ctx }) => {
      
             const data = await ctx.prisma.apiRequest.findMany()
             return data
     }),
 
    
  });